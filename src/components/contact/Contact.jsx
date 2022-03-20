import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { GrInstagram } from 'react-icons/gr'
import { FaLinkedin } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_842sw19', 'template_869kmcw', form.current, 'SBxN_15dE9v6NYX5-')
    
    e.target.reset()
  };

 return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>orhanozcelik3437@gmail.com</h5>
            <a href="mailto:orhanozcelik3437@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <GrInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>orhnozclk3437</h5>
            <a href="http://Instagram.com/orhnozclk3437" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Orhan Özçelik</h5>
            <a href="https://www.linkedin.com/in/orhan-ozcelik/" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact