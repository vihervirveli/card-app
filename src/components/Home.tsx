import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import 'bootstrap';
import Intro from './Intro';


const Home:React.FC = () => {
  return (
    <div>
        <h1>Home</h1>
      <Intro />
      

    </div>
  )
}

export default Home