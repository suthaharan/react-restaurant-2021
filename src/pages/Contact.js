import React from 'react';
import BannerImage from '../assets/pizza8.jpg'
import "../styles/Contact.css";

const Contact = () => {
  return (<div className='contact'>
      <div className="leftSide" style={{ backgroundImage: `url(${ BannerImage })`}}></div>
      <div className="rightSide">
        <h1>Contact</h1>
        <form id="contactForm" method="POST">
            <label htmlFor="firstName">First name</label>
            <input name="firstName" placeholder='Enter your first name' type="text"/>
            <label htmlFor="lastName">Last name</label>
            <input name="lastName" placeholder='Enter your last name' type="text"/>
            <label htmlFor="email">Email</label>
            <input name="email" placeholder='Enter your email' type="email"/>
            <label htmlFor="message">Message</label>
            <textarea name="message" placeholder='Message' rows="6" />
            <button type="submit">Send Message</button>
        </form>
      </div>
  </div>);
};

export default Contact;
