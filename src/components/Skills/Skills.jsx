import React, { useState, useRef, useEffect } from 'react'
import styles from './Skills.module.css'
import SkillBar from './SkillBar/SkillBar'
import Reveal  from '../Reveal/Reveal'

const skillsData = [
    {
        label:'JavaScript',
        percentage: 70,
        style: `${styles['progress-line']} ${styles.js}`
    },
    {
        label:'React',
        percentage: 40,
        style: `${styles['progress-line']} ${styles.react}`
    },
    {
        label:'NodeJS',
        percentage: 50,
        style: `${styles['progress-line']} ${styles.node}`
    },
    {
        label:'SQL',
        percentage: 60,
        style: `${styles['progress-line']} ${styles.sql}`
    },
]

const Skills = () => {
    const [isIntersected, setIsIntersected] = useState(false)

    const sectionRef = useRef(null);
    useEffect(() =>{
        const options = {
            rootMargin:'0px',
            threshold: 0.15,
        };

        const handleIntersection = (entries, observer) =>{
            const [entry] = entries;
            if(entry.isIntersecting){
                setIsIntersected(true);
                observer.unobserve(entry.target);
            }
        }
        const observer = new IntersectionObserver(handleIntersection, options)
        observer.observe(sectionRef.current)

        return () => {
            observer.disconnect();
        }
    },[]);

  return (
    <section id='skills' className={styles.skills} ref={sectionRef}>
        <Reveal>
            <div className='conteiner'>
                <div className={styles.title}>
                    <h2><span>My</span> Skills</h2>
                    <hr />
                </div>
                <div className={`grid ${styles['skills-grid']}`}>
                    <div className={styles.content}>
                        <h1>
                            In <span> Designing</span> <br />
                            And <span> Developing</span>
                        </h1>
                        <p>
                            I like programming so much in many languegas
                        </p>
                    </div>
                    <div className={styles['skill-bars']}>
                        {skillsData.map(skill => (
                            <SkillBar
                                key={skill.label}
                                label = {skill.label}
                                percentage = {skill.percentage}
                                style = {isIntersected? skill.style:''}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={`${styles.flex} conteiner`}>
                    <div>
                        <h3>
                            I'm available for work
                        </h3>
                    </div>
                    <div>
                        <a href="/images/CV_Lorenzo_Polverino.pdf" download="CV_Lorenzo_Polverino"> Download CV</a>
                    </div>

                </div>
            </div>
        </Reveal>
    </section>
  )
}

export default Skills