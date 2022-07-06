import React from 'react'
import './CSS/about.css'
import me2 from './images/me2.jpg'
const About = () => {
  return (
    <div className='about-me' >
        <div className="container" id='about'> 
            <div className="col1">
                <div className="box">
                        <img src={me2} alt="teaching" />
                        <div className="hrline"></div>
                        <div className="vrline"></div>
                    </div>
                </div>
            <div className="col2">  
                <h2>Hello, I Am <span className='name'>Saif Touzi</span></h2>
                <h3>⚠ 𝑰'𝒎 𝑵𝒐𝒕 𝒀𝒐𝒖𝒓 𝑨𝒗𝒆𝒓𝒂𝒈𝒆 𝑮𝒂𝒎𝒆 𝑫𝒆𝒗 ⚠</h3>
                <p>
                A 22yo Passionate Self Taught Indie Game Developer with 2y of Experience Making 2D Games using The Unity3D Game Engine, Making/Teaching 2D Game Art With Photoshop on Udemy/Skillshare And an Instructor on the TechInventors Startup and the Microsoft IssatSo Club.
                My Goal is To Create One of The Best Indie 2D Games of All Time for All Platforms cause thta's what we do right ? We Build Worls, Bring Characters To Life through a Story that Drives us Forward But Most Importantaly that we Make a Big Smile on Our Gamers Faces and that will Make All The Difference.
                </p>
                <ul className='myinfo'>
                    <li>Name <span>:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saif Touzi</li>
                    <li>Age <span>:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   22</li>
                    <li>Address <span>:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sousse, Tunisia</li>
                    <li>Phone <span>:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+216 27051105</li>
                    <li>Email <span>:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contact@saifgames.com</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About