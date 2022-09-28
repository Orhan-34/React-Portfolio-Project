import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="!#" className='footer__logo'>Software Development</a>

      <ul className="permalinks">
          <li><a href="!#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
        <a href="https://www.github.com"><AiFillGithub /></a>
        <a href="https://www.instagram.com"><GrInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Software Development Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer