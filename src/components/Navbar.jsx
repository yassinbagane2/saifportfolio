import React, { useState } from 'react'
import logo from './images/logo.png'
import './CSS/navbar.css'
const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false);
    const showMenuHandler = () => {
        setShowMenu(!showMenu);
        console.log('====================================');
        console.log(showMenu);
        console.log('====================================');
    }
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="logo" />
            <h2>aif Games</h2>
        </div> 
        <ul className={showMenu ? 'nav__links show-menu' : 'nav__links'}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li className='active__link'><a href="#contact">Contact US</a></li>
        </ul>
        <div className='menu' onClick={showMenuHandler}>
        <i class="fa-solid fa-bars"></i>
        </div>
    </nav>
  )
}

export default Navbar