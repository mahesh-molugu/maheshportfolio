import React from 'react'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'
import './Skills.css'

const Skills = () => {
  return (
    <motion.div className="Skills"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}>
       <div className="skills-container">
        <div className="heading"> 
          <h2>"Nice to meet you. I am <span className="name">Mahesh Molugu."</span></h2>
        </div>
      
       <div className='tech-skills'>
              <div>
                <h2>Technical Skills</h2> 
              </div>
            <div className='t-skill'>
              <div className="front">
              <ul>
             <li> <button>HTML5</button></li>
            <li> <button>CSS3</button></li>
             <li><button>Java Script</button></li>
             <li><button>React Js</button></li>
              </ul>
            </div>
            <div className="back">
             <ul>
           
            <li><button>Java</button></li>
            <li><button>Sql</button></li>
            <li><button>Spring Boot</button></li>
            
            <li><button>Git & Git Hub</button></li>
            </ul>
            </div>
            </div>
          
        </div>
        
            
              <div className="soft-skills">
               
               <div>
                 <h2>Soft-Skills</h2>
               </div>
                <div className='s-skill'>
                  <div>
                  <ul>
                 
                  <li><button>Problem Solving</button></li>
                  <li><button>Team Collaboration</button></li>
                  <li><button>Quick Learning</button></li>
                   <li><button>Good Communication</button></li>
                  </ul>
                </div>
                  <div>
                 <ul>
                  <li><button>Adaptibility</button></li>
                  <li><button>Creative Thinking</button></li>
                   <li><button>Hard Working</button></li>
                  
                  <li><button>Time Management</button></li>
                 </ul>
                  </div>
                </div>

                 

              </div>
                  <div className="contact-btn">
                    <button><NavLink to="/contact" >Contact Me</NavLink></button>
                  </div>
       </div>
    </motion.div>
  )
}

export default Skills