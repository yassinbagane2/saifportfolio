import React from 'react'
import './button.css'
const Button = (props) => {
  return (
    <button className={props.className || 'btn'} onClick = {props.onClick}>{props.children}</button>
  )
}

export default Button