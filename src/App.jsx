import React from 'react'
import Navbar from './componets/Navbar'
import Home from './componets/Home'
import About from './componets/About'
import TeckSkill from './componets/TeckSkill'
import Project from './componets/Project'
import Services from './componets/Services'
import Contact from './componets/Contact'
import Footer from './componets/Footer'


function App() {


  return (
   <div className='overflow-x-hidden w-full h-screen  text-2xl  bg-[rgba(0,0,0,0.4)]'>
    <Navbar/>
    <Home/>
    <About/>
    <TeckSkill/>
     <Project />
     <Services/>
     <Contact/>
     <Footer/>
  </div>
  )
}

export default App
