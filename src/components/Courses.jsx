import React from 'react'
import Card from './UI/Card'
import './CSS/work.css'
import Svg1 from './Svg1'

const Courses = () => {
  return (
    <div className="work courses" id='cousrses'>
              <Svg1/>
      <div className="section__tag">
        <h1 className='tag'><span>Cou</span>rses</h1>
        <div className="cards">
          <Card courses = {true} image= "images/course1.jpg" date = "15/03/2021" name = "Learn 2D Game Environments Graphic Design For Beginners" description="Learn how you can create Digital 2D Game Art Environments quickly in Photoshop!" href= "https://www.udemy.com/course/learn-2d-game-environments-graphic-design-for-beginners/?referralCode=517706DEEC32B8043858&fbclid=IwAR2XnWtH5HqAA5Ec8psXR64NwfykpLDYFvpK1iJF5mLd1nHA9I5EjgLOZ1o"/>
          <Card courses = {true} image= "images/course2.jpg" date = "29/12/2021" name = "Learn 2D Game Backgrounds Graphic Design For Beginners" description="This is a short 5 levels with a Boss Fight Demo of a 2D Side Scrolling Action Space Shooter, Hope you enjoy it!" href="https://www.udemy.com/course/learn-2d-game-backgrounds-graphic-design-for-beginners/"/>
        </div>
      </div>
    </div>
  )
}

export default Courses