import React from 'react'
import './CSS/home.css'
import Me from './images/me.jpg'
import Typewriter from "typewriter-effect";
import Button from './UI/Button';


const Home = () => {
  
  return (
    <div className='home-page' id='home'>
      <img src={Me} alt="me" />
      <div className="welcome">
        <h1> Hello!</h1>
        <br />
        <h1 className='typewriter'>I'm A &nbsp; </h1>
        <h1 className='typewriter'>
          <Typewriter 
          options={{
          strings: ['Game Developer', 'Game Illustrator', 'Freelancer'],
          autoStart: true,
          loop: true,
          }}/>
        </h1>
        
        <p>I' am a full time indie game developer/illustrator with over 2 years of experience making/releasing complete games !</p>
          <Button><a href="#projects">View My Work</a></Button>
          <Button><a href="#contact">Hire Me</a></Button>
      </div>
    </div>
  )
}

export default Home