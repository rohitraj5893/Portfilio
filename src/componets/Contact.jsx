import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
function Contact() {
  return (
    <div id='contact' className='w-11/12 h-auto mt-10 mx-auto bg-transparent'>
      <div className=' flex items-center flex-col '>
        <h2 className='mt-5 text-[#272727] text-4xl font-bold'>Contact Me</h2>
        <span className='mt-2 h-1 w-50 bg-[#515153] rounded-md'></span>
      </div>
      <div className='flex justify-center gap-7 p-10 flex-wrap'>
        <div className='flex flex-col space-y-5 justify-center'>
          <h4 className='text-[1.5rem] font-bold'>Get in touch</h4>
          <p className='text-sm text-[#272727]'>If you want to work together or have any query, feel free to contact me.</p>

          <div className='flex space-x-2 items-center'>
            <span className='text-[1rem]'><MdEmail /></span>
            <p className='text-[1rem]'>rohitkumary55555@gmail.com</p>
          </div>

          <div className='flex space-x-2 items-center'>
            <span className='text-[1rem]'><FaPhoneAlt /></span>
            <p className='text-[1rem]'>+91 8433194016</p>
          </div>
        </div>
      <div>
        <form className='flex flex-col space-y-3' action="">
          <div>
            <input
            className='text-sm text-white px-2 py-1 w-60 bg-[#242323] rounded-md border border-[#c5cac7]'
             type="text" name="name" id="" placeholder='Your Good Name' />
          </div>
          <div>
            <input
            className='text-sm text-white px-2 py-1 w-60 bg-[#242323] rounded-md border border-[#c5cac7]'
             type="Email" name="email" id="" placeholder='Your Email' />
          </div>
          <div>
            <textarea
            className='text-sm text-white px-2 py-1 w-60 bg-[#242323] rounded-md border border-[#c5cac7]'
            rows={6} placeholder='Your Message' />
          </div>
          <button className='w-40 text-center text-sm border-black px-2 py-1 rounded-md bg-[#bbbdb9] cursor-pointer hover:bg-[#5f6669] hover:text-white transition-all duration-200'>Send Message</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact