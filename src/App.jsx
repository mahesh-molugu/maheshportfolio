import { useState } from 'react'
import {motion} from 'framer-motion'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import './App.css'

const App = () =>
{
  return(
    
     <Router>
       <Navbar />
      
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>

      <Route path="*" element={<Navigate to ="/"/>}/>
      </Routes>
     </Router>
    
  )
}

export default App
