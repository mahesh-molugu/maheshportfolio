import React from 'react'
import {motion} from 'framer-motion'
import './About.css'
const About = () => {
  return (
    <motion.div className='About'
        initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      >
      
        

      <div className="about-container">
         <div className="education">
          <h2>Education </h2>
        <p>⚫ Graduation in Computer Science And Engineering from Kommuri Pratap Reddy Institute of Technology </p>
        <p className="years" >2022-2025</p>
        <p>📍Hyderabad</p>
        <p>⚫ Diploma in Electrical And Electronic Engineering from Government Polytechnic College </p>
        <p className="years">2019-2022</p>
        <p>📍Yadagirigutta</p>
        <p>⚫Secondary school Education</p>
        <p className="years">2018-2019</p>
         <p>📍Yadagirigutta</p>
       </div>
       
         <div className="summarise">
          <div className="summary">
            <h2 >Summary</h2>
        <p>I’m a quick learner with a strong ability to adapt to new technologies and environments. I approach every task with dedication and hard work, always striving to deliver efficient and high-quality results.</p>
       </div >

       <div className="training">
        <h2>
          Trainings & Internships
        </h2>
        <p>
          Completed Full Stack Java Development training at ExcelR EdTech, then completed four months internship at Aivariant  gaining hands-on experience in front-end, back-end, and database integration.
        </p>
       </div>
       
       <div className="career-goal">
        <h2>Career Goal</h2>
        <p>To become a skilled Full Stack Developer specializing in React and Supabase, contributing to innovative web solutions while continuously learning and adapting to emerging technologies.</p>
       </div>
       <div className="hobbies">
        <h2>Hobbies</h2>
        <p>I enjoy coding personal projects that challenge my creativity, sketching with pencil art to relax and express ideas visually, and listening to music which keeps me inspired and focused.</p>
       </div>
         </div>

      </div>
       
       <div className="declaration">
        <h2>"I Declare That Above Details are real and acheivements of myself " </h2>
       </div>
       <br /><br />
    </motion.div>
  )
}

export default About