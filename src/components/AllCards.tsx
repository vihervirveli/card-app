import React, { useEffect, useState } from 'react';
import {db} from "../firebase";
import { 
  collection, 
  getDocs,
  deleteDoc, 
  updateDoc,
  doc
} from "firebase/firestore/lite";
import { CardObject } from '../models/models';
const images = require.context("../images", true);
const imageList = images.keys().map(image => images(image));


const AllCards:React.FC = () => {
  const [allCards, setAllCards] = useState<CardObject[]>([]);

useEffect(() => {
  const fetchData = async () => {
    // connect todos collection
    const itemsCol = collection(db, "cards");
    
    const itemSnapshot = await getDocs(itemsCol);
    // todo text and id 
    // document id is unique, so it can be used with deleting todo
    let dbItems = itemSnapshot.docs.map(doc => {
      return  { 
        img: doc.data().img,
        id: doc.id,
        sender: doc.data().sender,
        recipient: doc.data().recipient,
        greeting: doc.data().greeting
      };
    });

    setAllCards(dbItems);
    console.log(dbItems)
  }

  fetchData();
},[setAllCards])


  // const mockData = [
  //   {
  //     img: imageList[0],
  //     sender: "Clara",
  //     recipient: "Tyson",
  //     greeting: "Hi, how's your vacation going?"
  //   },
  //   {
  //     img: imageList[1],
  //     sender: "Trevor",
  //     recipient: "Sandy",
  //     greeting: "Greetings from Paris!"
  //   },
  //   {
  //     img: imageList[2],
  //     sender: "John",
  //     recipient: "Oliver",
  //     greeting: "Hi, congratulations on your baby!"
  //   },
  //   {
  //     img: imageList[3],
  //     sender: "Kevin",
  //     recipient: "Elizabeth",
  //     greeting: "Happy valentine's day!"
  //   }
  // ]

  return (
    <div>
    <h1>AllCards</h1>
    {
      // mockData.map((card, index) => (
      //   <div className="card mb-3" key={index}>
      //   <img className="card-img-top" src={card.img} alt={card.img}>
      //   </img>
      //   <div className="card-body">
      //   <h5 className="card-title">From {card.sender} to {card.recipient}</h5>
      //   <div className="card-text">{card.greeting}</div>
      //   </div>
      // </div>
      //   )
      // )
      allCards.map((card, index) => (
        <div className="card mb-3" key={index}>
        <img className="card-img-top" src={`../images/${card.img}`} alt={card.img}>
        </img>
        <div className="card-body">
        <h5 className="card-title">From {card.sender} to {card.recipient}</h5>
        <div className="card-text">{card.greeting}</div>
        </div>
      </div>
        )
      )
    }
    </div>
  )
}

export default AllCards