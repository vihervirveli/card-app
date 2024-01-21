import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const Intro = () => {
  return (
    <div>
        <div><p>Welcome to the Card App.</p>
        <p>You can go create a card for yourself, or go see all the cards.</p>
        <p></p>
        </div>
        <div>
    <Link className='path' to="./create" relative='path'>Create card</Link>
    <Link className='path' to="./all" relative='path'>All Cards</Link>
        </div>

    </div>
  )
}

export default Intro;