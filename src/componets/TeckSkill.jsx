import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaJava,FaPython,FaGitAlt,FaGithub,FaDocker,FaAws,FaReact  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiExpress ,SiPostman } from "react-icons/si";
function TeckSkill() {
  return (
    <div className='w-11/12 h-auto mt-10 mb-10 mx-auto bg-transparent'>
        <div className='p-4 flex flex-wrap gap-4 justify-evenly text-5xl ' >
            <i><FaHtml5 /></i>
            <i><IoLogoCss3 /></i>
            <i><FaJava /></i>
            <i><FaReact /></i>
            <i><IoLogoJavascript /></i>
            <i><SiMysql /></i>
            <i><DiMongodb /></i>
            <i><SiExpress /></i>
            <i><SiPostman  /></i>
            <i><FaPython  /></i>
            <i><FaGitAlt /></i>
            <i><FaGithub /></i>
            <i><FaDocker /></i>
            <i><FaAws /></i>
        </div>
    </div>
  )
}

export default TeckSkill