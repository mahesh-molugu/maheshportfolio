import React from 'react'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <motion.div
     className="section-home"
     initial={{ opacity:0, y:30}}
     animate ={{ opacity:1, y:0 }}
     tranisition={{duration:1}}
    >
        <h1>I'M <span className="highlight">Mahesh Molugu</span></h1>
        <p>Full Stack Developer | React and Java Enthusiast</p>

        <div className="button-wrapper">
          <button  className='know-btn'><NavLink to="/about">Know More About Me</NavLink></button>
          <button className='projects-btn'><NavLink to="/projects">View My Projects</NavLink></button>
        </div>
    </motion.div>
  )
}

export default Home