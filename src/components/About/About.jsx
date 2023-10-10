import React from 'react'
import styles from './About.module.css'
import Reveal from '../Reveal/Reveal'

const About = () => {
  return (
    
    <section id="about" className={styles.about}>
        <Reveal>
            <div className='conteiner'>
                <div className={styles.title}>
                    <h2>About <span>Me</span></h2>
                    <hr />
                </div>
                <div className='grid'>
                    <div className={styles['about-img']}>
                        <img src="./images/profile.jpg" alt="profile lorenzo polverino"/>
                    </div>
                    <div className={styles['about-content']}>
                    <h3 className={styles.border}>Hi there!</h3>
                    <p>
                        I'm <span className={styles.name}>Lorenzo </span>, a Computer Science student in the University of Buenos Aires. </p>
                        <p>Im currently learning Full-Stack Development in my free time with React and Nodejs</p>
                    </div>
                </div>
            </div>
        </Reveal>
    </section>
  )
}

export default About