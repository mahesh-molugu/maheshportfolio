import React from 'react'
import {motion} from 'framer-motion'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  const [darkMode,setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    

  const toggleMode = () =>{
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <div>
       <motion.nav
       className={`navbar ${darkMode ? "dark":""}`}
       initial={{y:-80}}
       animate={{y:0}}
       transition={{ duration: 0.6}}
       >
         
        <h2 className="logo">👤 Mahesh Molugu</h2>
       
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={mobileMenuOpen ? 'mobile-menu-open' : ''}>
            <li><NavLink to="/"  className={({isActive})=>(isActive ? 'nav-link active-link' :'nav-link')} onClick={() => setMobileMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive})=>(isActive ? 'nav-link active-link' :'nav-link')} onClick={() => setMobileMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/skills" className={({isActive})=>(isActive ? 'nav-link active-link' :'nav-link')} onClick={() => setMobileMenuOpen(false)}>Skills</NavLink></li>
            <li><NavLink to="/projects" className={({isActive})=>(isActive? 'nav-link active-link' :'nav-link')} onClick={() => setMobileMenuOpen(false)}>Projects</NavLink></li>
            <li><NavLink to="/contact" className={({isActive})=>(isActive ? 'nav-link active-link':'nav-link')} onClick={() => setMobileMenuOpen(false)}>Contact</NavLink></li>
        </ul>

        <button 
        className={`mode-btn ${darkMode ? "dark-btn" :"light-btn"}`}
         onClick={toggleMode}>
            {darkMode ? '☀️ Light ' :'🌙 Dark'}
        </button>

       </motion.nav>
    </div>
  )
}

export default Navbar