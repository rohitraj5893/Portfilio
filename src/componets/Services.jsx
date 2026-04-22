import React from 'react'
import { SiFrontendmentor } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { FaWebAwesome } from "react-icons/fa6";
function Services() {
    return (
        <div id='service' className='w-11/12 h-auto mt-10 mx-auto bg-transparent'>
            <div className=' flex items-center flex-col '>
                <h2 className='mt-5 text-[#272727] text-4xl font-bold'>Services</h2>
                <span className='mt-2 h-1 w-50 bg-[#515153] rounded-md'></span>
            </div>
            <div className='w-7/12 flex flex-wrap justify-center space-x-5 mx-auto'>
                 <div className='mt-10 w-50 h-50  rounded-md shadow-2xl bg-[#aaaaac] hover:shadow-2xl hover:scale-110 transition-all  duration-300'>
                    
                    <div className='p-4 flex flex-col space-y-4'>
                        <h4 className='flex justify-center'><SiFrontendmentor/></h4>
                        <p className='text-[0.8rem] text-center text-[#1c1c1d] font-bold'>Frontend Devlopment</p>
                        <p className='text-sm text-center text-[#515153]'>I build modern and intractive website using React,Tailwind CSS,JavaScript,Node.js</p>
 
                    </div>
                </div>
                 <div className='mt-10 w-50 h-50  rounded-md shadow-2xl bg-[#aaaaac] hover:shadow-2xl hover:scale-110 transition-all  duration-300'>
                    
                    <div className='p-4 flex flex-col space-y-4'>
                        <h4 className='flex justify-center'><VscAzureDevops/></h4>
                        <p className='text-[0.8rem] text-center text-[#1c1c1d] font-bold'>DevOps Operations</p>
                        <p className='text-sm text-center text-[#515153]'>Basic understanding of Deployement tools.</p>
 
                    </div>
                </div>
                 <div className='mt-10 w-50 h-50  rounded-md shadow-2xl bg-[#aaaaac] hover:shadow-2xl hover:scale-110 transition-all  duration-300'>
                    
                    <div className='p-4 flex flex-col space-y-4'>
                        <h4 className='flex justify-center'><FaWebAwesome/></h4>
                        <p className='text-[0.8rem] text-center text-[#1c1c1d] font-bold'>Web Application</p>
                        <p className='text-sm text-center text-[#515153]'>Building modern web Application with dynamic features and smooth performance.</p>
 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services