import React from 'react'
import projectData  from '../data/ProjectData'

function Project() {
    return (
        <div id='project' className='w-11/12 h-auto mt-10 mx-auto bg-transparent'>
            <div className=' flex items-center flex-col '>
                <h2 className='mt-5 text-[#272727] text-4xl font-bold'>Projects!</h2>
                <span className='mt-2 h-1 w-50 bg-[#515153] rounded-md'></span>
            </div>
            <div className='flex flex-wrap justify-center gap-5 mt-10 text-[1.1rem]'>
                {/* <div className='w-65 h-90  rounded-md border bg-white hover:shadow-2xl hover:scale-110 transition-all  duration-300'>
                    <img src="src\assets\weather.png" className='object-fit p-0 w-full' alt="" />
                    <div className='p-4'>
                        <h4>Weather App</h4>
                        <p className='text-sm text-[#515153]'>Responsive weather application with real-time data.</p>
                        <div className='text-sm flex space-x-3 mt-5'>
                            <span className='text-[0.65rem] border px-2 py-1 text-white bg-black rounded-2xl'>HTML</span>
                            <span className='text-[0.65rem] border px-2 py-1 text-white bg-black rounded-2xl'>CSS</span>
                            <span className='text-[0.65rem] border px-2 py-1 text-white bg-black rounded-2xl'>JavaScript</span>
                        </div>
                        <div className='text-[0.85rem] mt-4 flex space-x-4 font-bold '>
                            <a className='hover:text-[#515153] transition-all duration-200' href="https://weatherapp-one-self-52.vercel.app/">View</a>
                            <a className='hover:text-[#515153] transition-all duration-200' href="https://github.com/rohitraj5893/Weather-App.git">Code</a>
                        </div>
                    </div>
                </div> */}
                {
                    projectData.map((project) => (
                        <div key={project.id} className='w-65 h-100  rounded-md border bg-white hover:shadow-2xl hover:scale-110 transition-all  duration-300'>
                            <img src={project.image} className='object-fit p-0 w-full h-40' alt="" />
                            <div className='p-4 mx-auto'>
                                <h4>{project.title}</h4>
                                <p className='text-sm text-[#515153]'>{project.description}</p>
                                <div className='text-sm flex flex-wrap gap-2 box-border mt-4'>
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className='text-[0.65rem] border px-2 py-1 text-white bg-black rounded-2xl '>{tech}</span>
                                    ))}
                                </div>
                                <div className='text-[0.85rem] mt-4 flex space-x-4 font-bold '>
                                    <a className='hover:text-[#515153] transition-all duration-200' href={project.viewLink} target="_blank" rel="noopener noreferrer">Live</a>
                                    <a className='hover:text-[#515153] transition-all duration-200' href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
                                </div>
                            </div>
                        </div>
                    ))
                }

               

            </div>
        </div>
    )
}

export default Project