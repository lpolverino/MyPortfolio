import React, { useState } from 'react'
import styles from './ContactForm.module.css'


const ContactForm = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [touchedFields, setTouchedFields] = useState([]);
    

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        if(name === 'name'){
            setEnteredName(value);
        } else if (name === 'email'){
            setEnteredEmail(value)
        } else if ( name === 'message'){
            setEnteredMessage(value)
        }
    } 

    const handleInputBlur = (event) => {
        const {name} = event.target;
        if(!touchedFields.includes(name)){
            setTouchedFields((prevFields) => [...prevFields, name])
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setTouchedFields(["name","email","message"]);

        if(
            enteredName.trim() === '' ||
            enteredEmail.trim() === '' ||
            enteredMessage.trim() === '' 
        ){
            return
        }

        const formData = {
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage
        }
        console.log(formData);

        setEnteredName('');
        setEnteredEmail('');
        setEnteredMessage('');
        setTouchedFields([]);
        
    };

    const isFieldInvalid = (fieldName) => {
        if (fieldName === 'name' ) {
            return enteredName.trim() === '' &&
            touchedFields.includes(fieldName) 
        }
        if (fieldName === 'email'){
            return (
                (!enteredEmail.trim() || !enteredEmail.includes('@')) &&
                touchedFields.includes(fieldName)
            );
        }
        if( fieldName === 'message'){
            return enteredMessage.trim() === '' &&
            touchedFields.includes(fieldName)
        }
        return false
    };


  return (
    <form onSubmit={handleSubmit}>
        <div className={`${styles['form-control']} ${isFieldInvalid('name') && styles.invalid}`}>
            <input type="text"
            name='name'
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            placeholder='Name'
            value={enteredName} />
            {isFieldInvalid('name') && (
                <p className={styles.error}>Please enter your name.</p>
            )}
        </div>
        <div className={`${styles['form-control']} ${isFieldInvalid('email') && styles.invalid}`}>
            <input type="text"
            name='email'
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder='Email'
            value ={enteredEmail} />
            {isFieldInvalid('email') && (
                <p className={styles.error}>Please enter your email. </p>
            )}
        </div>
        <div className={`${styles['form-control']} ${isFieldInvalid('message') && styles.invalid}`}>
            <textarea name="message"
             placeholder='Message'
             className={styles.textarea}
             value = {enteredMessage}
             onBlur={handleInputBlur}
             onChange={handleInputChange}></textarea>
             {isFieldInvalid('message') && (
                <p className={styles.error}>Please enter your message.</p>
            )}
        </div>
        <button className={styles.button}> Send Message</button>
    </form>
  )
}

export default ContactForm