import React from 'react'
import {motion} from 'framer-motion'
import './Skills.css'

const Skills = () => {
  return (
    <motion.div className="Skills"
     initial={{ opacity:0, y:30}}
     animate ={{ opacity:1, y:0 }}
     tranisition={{duration:1}}>
       <div className="heading"> 
          <h2>"Nice to meet you. I am <span className="name">Mahesh Molugu."</span></h2>
        </div>
       <div className='tech-skills'>
          <h2>Technical Skills</h2>   
          <ul>
            <li> <button>HTML5</button></li>
            <li> <button>CSS3</button></li>
             <li><button>Java Script</button></li>
             <li><button>React Js</button></li>
             <li><button>Java</button></li>
            <li><button>Spring Boot</button></li>
            <li><button>Sql</button></li>
            <li><button>Git & Git Hub</button></li>

           </ul>
              </div>
              <div className="soft-skills">
                <h2>Soft-Skills</h2>
                <ul>
                  <li><button>Good Communication</button></li>
                  <li><button>Problem Solving</button></li>
                  <li><button>Team Collaboration</button></li>
                  <li><button>Hard Working</button></li>
                  <li><button>Creative Thinking</button></li>
                  <li><button>Time Management</button></li>
                  </ul>

                  <div className="contact-btn">
                    <button>Contact Me</button>

                  </div>

              </div>
    </motion.div>
  )
}

export default Skills