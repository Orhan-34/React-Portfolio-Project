import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/orhan-ozcelik/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Orhan-34" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/orhnozclk3437/" target="_blank"><FiInstagram/></a>
    </div>
  )
}

export default HeaderSocials