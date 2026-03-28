import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";function Navbar() {
  
  return (
    
    <nav className='fixed left-10 top-5 w-11/12 h-12 p-5 flex justify-between items-center bg-[rgba(8,8,8,0.82)] rounded-full z-50'>
      <a href="#home">
        <div className=' flex items-center text-white text-[20px] font-bold'>
          <span className='text-[rgb(146,145,145)] text-4xl font-semibold '>r</span>OHIT
        </div>
      </a>
      <ul className='flex space-x-10 text-white text-sm jusity-center items-center'>
        <li className='hover:text-[rgb(146,145,145)] transition-all duration-300 cursor-pointer'><a href='#home'>Home</a></li>
        <li className='hover:text-[rgb(146,145,145)] transition-all duration-300 cursor-pointer'><a href='#about'>About</a></li>
        <li className='hover:text-[rgb(146,145,145)] transition-all duration-300 cursor-pointer'><a href='#service'>Service</a></li>
        <li className='hover:text-[rgb(146,145,145)] transition-all duration-300 cursor-pointer'><a href='#project'>Project</a></li>
        <li className='hover:text-[rgb(146,145,145)] transition-all duration-300 cursor-pointer'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='flex items-center text-white text-md space-x-5 '>
        <a href='https://github.com/rohitraj5893' className='hover:text-[rgb(146,145,145)] transition-all duration-300 cursor-pointer'><FaGithub /></a>
        <a href='https://www.instagram.com/_rohitrajput_75/' className='hover:text-[rgb(146,145,145)] transition-all duration-300 cursor-pointer'><FaInstagram /></a>
        <a href='https://www.linkedin.com/in/rohit-rajput-70a3b5288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='hover:text-[rgb(146,145,145)] transition-all duration-300 cursor-pointer'><FaLinkedin /></a>
      </div>
    
    </nav>
  )
}

export default Navbar