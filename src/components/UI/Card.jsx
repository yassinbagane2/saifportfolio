import React from 'react'

import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.image} alt="Game"/>
        <p className='date'><div><i class="fa-solid fa-clock"></i>{props.date}</div></p>
        <h1>{props.name}</h1>
        <div className="description">
            <p>{props.description}</p>
        </div>
        <a href={props.href} rel='noreferrer' target="_blank">Demo</a>
    </div>
  )
}

export default Card