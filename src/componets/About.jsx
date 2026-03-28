import React from 'react'

function About() {
  return (
    <div id='about' className='w-11/12 h-auto mt-10 mx-auto bg-transparent'>
      <div className=' flex items-center flex-col flex-wrap justify-center'>
        <h2 className='mt-5 text-[#272727] text-4xl font-bold'>About Me</h2>
        <span className='mt-2 h-1 w-50 bg-[#515153] rounded-md'></span>
      </div>
      <div className='p-10 mx-auto flex justify-between space-x-25 '>
        <div className='rounded-md flex items-center justify-center max-[1000px]:hidden'>
          <img className='bg-cover h-80' src="src\assets\sung.png" alt="" />
        </div>
        <div className='w-1/2  text-[1.1rem] flex items-center max-[1000px]:w-full max-[1000px]:text-center'>
          <p className='text-center'>“Hi, I’m Rohit Kumar, a passionate Full Stack Developer and Computer Science student. I enjoy building modern, responsive, and interactive web interfaces that provide a great user experience. I focus on clean design, smooth animations, and writing efficient code using modern web technologies. I’m always learning new tools and improving my skills to create better digital products. My goal is to combine creativity with technology to build websites that are both beautiful and functional.”
          </p>
        </div>
      </div>
    </div>
  )
}

export default About