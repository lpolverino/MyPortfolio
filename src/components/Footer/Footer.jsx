import React from 'react'
import styles from './Footer.module.css'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className='conteiner'>
            <div className={styles.flex}>
                <div>
                    <p>&copy;2023 by Polverino Lorenzo. All rigths reserved</p>
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className={styles.icons}>
                    <a href="https://github.com/lpolverino">
                        <BsGithub size={30}></BsGithub>
                    </a>
                    <a href="https://www.linkedin.com/in/lorenzo-polverino-845609219/">
                        <BsLinkedin size={30}></BsLinkedin>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer