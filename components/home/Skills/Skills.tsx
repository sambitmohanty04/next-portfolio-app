'use client'
import React from 'react'
import { RiReactjsLine, RiNextjsLine } from "react-icons/ri";
import { FaCss3, FaGithub, FaNodeJs } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTypescript, TbBrandBootstrap, 
            TbBrandTailwind, TbFileTypeHtml, TbBrandAdobePhotoshop } from "react-icons/tb";
import Tilt from 'react-parallax-tilt';

const skills = [
    {
        name : 'Node js',
        icon : <FaNodeJs />
    },
    {
        name : 'React js',
        icon : <RiReactjsLine />
    },
    {
        name : 'Next js',
        icon : <RiNextjsLine />
    },
    {
        name : 'Javascript',
        icon : <TbBrandJavascript />
    },
    {
        name : 'Typescript',
        icon : <TbBrandTypescript />
    },
    {
        name : 'Html',
        icon : <TbFileTypeHtml />
    },
    {
        name : 'Bootstrap 5',
        icon : <TbBrandBootstrap />
    },
    {
        name : 'Css',
        icon : <FaCss3 />
    },
    {
        name : 'Tailwind Css',
        icon : <TbBrandTailwind />
    },
    {
        name : 'Github',
        icon : <FaGithub />
    },
    {
        name : 'Adobe Photoshop',
        icon : <TbBrandAdobePhotoshop />
    }
]

const Skills = () => {
  return (
    <>
        <div className='py-16' id="skills">
            <h1 className='text-center text-2xl md:text-4xl xl:text-4xl font-bold text-white'>
                My <span className='text-cyan-300'>Skills</span>
            </h1>
            <div className='w-[90%] sm:[w-70%] mx-auto flex flex-wrap justify-center gap-6 mt-16'>
                {
                    skills.map((skill) => {
                        return (
                            <Tilt key={skill.name} scale={1.3} transitionSpeed={400}>
                                <div className='bg-[#14134145] text-center w-40 h-40 rounded-3xl 
                                flex flex-col items-center justify-center shadow-lg hover: scale100'>
                                    <div className='text-5xl mb-4 text-cyan-200'>{skill.icon}</div>
                                    <p className='text-purple-400 mt-1 text-sm'>{skill.name}</p>
                                </div>
                            </Tilt>
                        )
                    })
                }
            </div>
        </div>
    </>    
  )
}

export default Skills