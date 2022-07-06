import React from 'react'
import Card from './UI/Card'
import './CSS/work.css'
const Work = () => {
  return (
    <div className="work" id='projects'>
      <div className="section__tag">
        <h1><span>Pro</span>jects</h1>
        <div className="cards">
          <Card image= "images/game1.png" date = "10/04/2022" name = "Last Jump" description="2D Hyper Casual Game Made in 48h using Unity3D and C# !" href= "https://saifgames.itch.io/last-jump?fbclid=IwAR0DHYPRQzMEjRuJOwlkUOv3U5WVkDo6cSmXYUhjmijNKvTwIVjs2QYwdIA"/>
          <Card image= "images/game2.png" date = "16/03/2022" name = "Last Galaxy" description="This is a short 5 levels with a Boss Fight Demo of a 2D Side Scrolling Action Space Shooter, Hope you enjoy it!" href= "https://saifgames.itch.io/last-galaxy?fbclid=IwAR2mxyi4dy8W81yFFoxuagyXPOfjVHbA4SdG9KGqMHB1mE8PJ-qgPVqXVvw"/>
          <Card image= "images/game3.jpg" date = "19/01/2022" name = "Last Soul" description="A Puzzle Platformer made in 48h for the global game jam which weather you can control the character or his soul to avoid obstacles and reached the end level !" href= "https://saifgames.itch.io/last-soul?fbclid=IwAR2SfyDRIZK1LtWxm1XqY3zp1l0Aj8rdP8Jsu_A_KaO2XJES_P5_F7HvS2I"/>
        </div>
      </div>
    </div>
  )
}

export default Work