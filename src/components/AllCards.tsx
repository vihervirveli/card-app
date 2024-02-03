import React from 'react';
const images = require.context("../images", true);
const imageList = images.keys().map(image => images(image));


const AllCards:React.FC = () => {
  const mockData = [
    {
      img: imageList[0],
      sender: "Clara",
      recipient: "Tyson",
      greeting: "Hi, how's your vacation going?"
    },
    {
      img: imageList[1],
      sender: "Trevor",
      recipient: "Sandy",
      greeting: "Greetings from Paris!"
    },
    {
      img: imageList[2],
      sender: "John",
      recipient: "Oliver",
      greeting: "Hi, congratulations on your baby!"
    },
    {
      img: imageList[3],
      sender: "Kevin",
      recipient: "Elizabeth",
      greeting: "Happy valentine's day!"
    }
  ]

  return (
    <div>
    <h1>AllCards</h1>
    {
      mockData.map((card, index) => (
        <div className="card mb-3" key={index}>
        <img className="card-img-top" src={card.img} alt={card.img}>
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