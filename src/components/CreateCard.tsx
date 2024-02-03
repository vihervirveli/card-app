import PicPanel from './PicPanel';
import {useRef, useState} from "react";
import "./PicPanel.module.css";
import butterfly from "../images/butterfly.jpg";
import {db} from "../firebase";
import { 
  collection,
  addDoc,
  getDoc, 
  getDocs,
  deleteDoc, 
  updateDoc,
  doc
} from "firebase/firestore/lite";
import { useNavigate } from 'react-router-dom';
import { NewCardObject, CardObject } from '../models/models';

const CreateCard:React.FC = () => {
  const [pic, setPic] = useState<string>(butterfly);
  const [sender, setSender] = useState<string>("");
  const [recipient, setRecipient] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");
  const sectionName = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
 
  /**
   * Handles the submission of a single card
   */
  const handleSubmit = async (event: React.SyntheticEvent) => {
    // e.preventDefault();
    const newCardObject:NewCardObject = {
      img: pic,
      sender: sender,
      recipient: recipient,
      greeting: greeting
    }

    const docRef = await addDoc(collection(db, "cards"), newCardObject);
    // get added doc id and set id to newItem
    const newId = docRef.id;
    const docRefGet = doc(db, "cards", newId);
    const docSnap = await getDoc(docRefGet);
    const newData = docSnap.data();

    const dbCard: CardObject = {
      id: newId,
      img: newData?.img,
      sender: newData?.sender,
      recipient: newData?.recipient,
      greeting: newData?.greeting
    };

    navigate('/all')



  }

  /***
   * Moves the viewer into the desired section
   */
  const scrollToSection = () => {
    sectionName.current?.scrollIntoView({block: "start", behavior: "smooth" });
  //  sectionName.current?.scrollTo()
  // window.scrollTo(0,100);
    };


  /**
   * Handles the choosing of a picture. Clicking the picture makes the choice
   * @param picture chosen picture as a string
   */
 const handlePicChoice = (picture:string) => {
    setPic(picture);
    scrollToSection();
  }

  return (
    <div className="container mt-4">
    <h1>CreateCard</h1>  
      <h2>Step 1: Choose a picture for your card.</h2>
      <PicPanel handlePicChoice={handlePicChoice}/>
      <h2 ref={sectionName}>Step 2: Fill out your name, the recipient, and your greeting</h2>
    <form>
      <div className="form-group my-2">
        <label htmlFor="name">Your Name</label>
        <input type="text" className="form-control" id="name" placeholder="John Doe" value={sender} onChange={(e) => setSender(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label htmlFor="recipient">Recipient</label>
        <input type="text" className="form-control" id="recipient" placeholder="Jane Doe" value={recipient} onChange={(e) => setRecipient(e.target.value)}></input>
      </div>
      <div className="form-group my-2">
        <label htmlFor="greeting">Your greeting to the recipient</label>
        <textarea className="form-control" id="greeting" rows={3} value={greeting} onChange={(e) => setGreeting(e.target.value)}></textarea>
      </div>
    </form>
      <p>Step 3: Check out the preview</p>
      <div className="card">
        <img className="card-img-top" src={pic} alt={pic}>
        </img>
        <div className="card-body">
        <h5 className="card-title">From {sender} to {recipient}</h5>
        <div className="card-text">{greeting}</div>
        </div>
      </div>
      <p className="mt-2">If you're satisfied with the preview, you can submit your card and see all past cards</p>
      <button type="submit" onClick={handleSubmit} className="btn btn-primary mb-4">Submit</button>
    </div>

  )
}

export default CreateCard;