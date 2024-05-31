import React from 'react'
import facebook from './img/logo-facebook.svg'
import inst from './img/logo-instagram.svg'
import twitter from './img/logo-twitter.svg'
import linkedin from './img/logo-linkedin.svg'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.Footer}>
        <span>
        © 2024 Copyright, All Right Reserved, Made by Ilya Yugai with 
        </span>
        <ul>
            <li><a href="https://twitter.com/"><img src={twitter} alt="" /></a></li>
            <li><a href="https://www.facebook.com/"><img src={facebook} alt="" /></a></li>
            <li><a href="https://www.instagram.com/"><img src={inst} alt="" /></a></li>
            <li><a href="https://www.linkedin.com/"><img src={linkedin} alt="" /></a></li>
        </ul>
    </div>
  )
}

export default Footer