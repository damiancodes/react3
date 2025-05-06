import React from 'react'

import Navbar from '../Components/Navbar';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'



export const Home = () => {
  return (
    <div>
          <Navbar />
        <h1>Home</h1>
        <Button variant="secondary">Click Me</Button>
        <ProgressBar now={70} />
        <p>Welcome to the Home page!</p>
        <Button variant="success">Resume</Button>
        <FontAwesomeIcon icon={faHouse} />
    </div>
  )
}

export default Home;