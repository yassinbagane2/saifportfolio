import React from 'react'
import './CSS/contact.css'
import Svg2 from './Svg2'
const Contact = () => {
  const sendMessageHandler = (e) => {
    e.preventDefault();
    alert('doesnt work yet');
  }
  return (
    <div className='contact' id='contact' >
        <Svg2 />
        <h1>Let's Get In <span>Touch!</span></h1>
        <div className="form-inputs">
          <form>
            <input type="text" id='name' placeholder='Name' autoComplete="off" />
            <div className="email-sub">
              <input type="email" placeholder='Email' />
              <input type="text" placeholder='Subject'/>
            </div>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
            <button type="submit" onClick={sendMessageHandler}><span>Send Message</span></button>
          </form>
        </div>
        <div className="socials">
        <li><a href="https://www.facebook.com/saif.touzi" rel='noreferrer' target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="https://www.linkedin.com/in/saif-touzi/" rel='noreferrer' target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
        <li><a href="https://www.youtube.com/channel/UCMW-4ZW60T-728bX_WKNeSg" rel='noreferrer' target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
      </div>
    </div>
  )
}

export default Contact