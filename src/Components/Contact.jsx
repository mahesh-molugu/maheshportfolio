import { motion } from 'framer-motion'
import React from 'react'
import {useRef,useState} from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css'


const Contact = () => {

  const formRef = useRef(null);
  const [status, setStatus] = useState ('');

  const SERVICE_ID = 'service_21wxk9i';
  const TEMPLATE_ID = 'template_2gn01ne';
  const PUBLIC_KEY = 'O69evniccCz-GTVf4';

  const sendEmail = async (e) => {
    e.preventDefault()
    
    setStatus('sending...')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('message sent successfully!');
      formRef.current.reset();
    }
    catch (error){
      console.error(error);
      setStatus('Failed to send the message, try again later.');
    }

  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="contact">
       <div className="contact-header">
        <h2>CONTACTS</h2>
        <p>I'm always open to new opportunities - let's connect</p>
      </div>
      <div className="contact-container">
       <div className="details">
        <h3>Contact Me</h3>
        <p>📍 Hyderabad, India</p>
        <p>📞 +91 9100608465</p>
        <p>📧 molugumahesh345@gmail.com</p>
        <div className="icons">
  <a href="https://github.com/" target="_blank" className="git-hub">
    <FaGithub size={30} color='black' />
  </a>

  <a href="https://www.linkedin.com/" target="_blank" className="linkedin">
    <FaLinkedin size={30} color='blue' />
  </a>

  <a href="https://wa.me/919100608465" target="_blank" className="whatsapp">
    <FaWhatsapp  size={30} color='green'/>
  </a>
</div>
  </div>   
      <div className="divider">
        </div>

        <div className="send-message">

          <h3>Send a Message</h3>
           <form ref={formRef} onSubmit={sendEmail} className="form" >
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />

          <textarea
            name="message"
            placeholder="You can type your Message upto 5 rows"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
        {status && (
          <p className={`status-text ${status.includes('successfully') ? 'success' : status.includes('sending') ? 'sending' : 'error'}`}>
            {status}
          </p>
        )}
        </div>
      </div>
      </div>

    </motion.div>
  )
}

export default Contact