import React from 'react'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <motion.div
     className="section-home"
  initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
       <div className="home-page">
        <div className="head">
         <h1>I'M <span className="highlight">Mahesh Molugu</span></h1>
        
        </div>
        <div className="para">
        <p>Full Stack Developer | React and Java Enthusiast</p>
        </div>

        <div className="buttons">
          <button ><NavLink to="/about">Know More About Me</NavLink></button>
          <button ><NavLink to="/projects">View My Projects</NavLink></button>
        </div>
       </div>
    </motion.div>
  )
}

export default Home