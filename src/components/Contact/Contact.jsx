import React from 'react'
import styles from './Contact.module.css'
import Reveal from '../Reveal/Reveal'
import {TbPhoneCall} from 'react-icons/tb'
import {HiOutlineMail} from 'react-icons/hi'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
    <section id='contact' className={styles.contact}>
        <Reveal>
            <div className='conteiner'>
                <div className={styles.title}>
                    <h2>
                        Get In <span> Touch </span>
                    </h2>
                    <hr />
                </div>
                <div className={`${styles['contact-form']} grid`}>
                    <div className={styles.content}>
                        <h3>Let's Connect</h3>
                        <p>Please fill out or conect me by:</p>
                        <div className={styles['contact-wrapper']}>
                            <TbPhoneCall size={50}></TbPhoneCall>
                            <span> Call me </span>
                            <h3> +54 9 11-33633288</h3>
                        </div>
                        <div className={styles['contact-wrapper']}>
                            <HiOutlineMail size={50}></HiOutlineMail>
                            <span> Email </span>
                            <a href="lorenz.polverino@gmail.com">lorenz.polverino@gmail.com</a>
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.heading}>Send Me a Message</h3>
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
        </Reveal>

    </section>
  )
}

export default Contact