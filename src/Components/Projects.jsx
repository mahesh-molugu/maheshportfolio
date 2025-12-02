import React from 'react'
import {motion} from 'framer-motion'
import './Projects.css'

const Projects = () => {
  return (
    <motion.div className="Projects"
     initial={{ opacity:0, y:30}}
     animate ={{ opacity:1, y:0 }}
     tranisition={{duration:1}}>
      <div className="projects-header">
        <h2>PROJECTS</h2>
        <br />
      </div>
      <div className="ecommerce-project">
        <h3 className="E-head">Ecomerce-Web appplication</h3>
        <p>A fully responsive e-commerce platform where users can browse products, add items to the cart, and complete purchases with a smooth and secure checkout experience. Includes product search, filters, user authentication, and an intuitive admin panel for managing inventory and orders.</p>
        <br />
        <h3 className="tech-stackhead">Tech stack</h3>
        <ul className="stack-list">
          <li>Frontend: React.js, HTML5, CSS3,Bootstrap</li>
          <li>State Management: Redux / Context API</li>
          <li>Database: MongoDB / Supabase / MySQL</li>
          <li>Authentication: JWT Authentication </li>
       
        </ul>
        <br />
         <h4>GIT HUB Link : <a href="https://github.com/shivaKumar247/Ecommerce" className="link">E-Commerce Site</a></h4>
      </div>




    </motion.div>
  )
}

export default Projects