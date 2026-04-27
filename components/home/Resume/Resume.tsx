import React from 'react';
import ResumeCard from './ResumeCard';
import { FaCodepen, FaReact } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";

const Resume = () => {
  return (
    <>
        <div className='py-16' id="resume">
            <div className='w-[90%] sm:[w-70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>   
                {/* ----work sec---- */}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                        My Work <span className='text-cyan-300'>Experience</span>
                    </h1>
                    <div className='mt-10' data-aos="fade-down-right">
                        <ResumeCard 
                            Icon = {FaCodepen} 
                            role = 'Frontend Developer'
                            desc = 'A passionate Frontend Developer with strong experience in building user-friendly web applications. Skilled in modern JavaScript frameworks and UI/UX best practices, with a focus on performance, scalability, and clean code.'
                         />
                         <ResumeCard 
                            Icon = {FaReact} 
                            role = 'React Developer'
                            desc = 'Build scalable, high-performance web applications using modern React architecture, delivering seamless user experiences and maintainable code.'
                         />
                         <ResumeCard 
                            Icon = {MdDesignServices} 
                            role = 'UI and UX Designer'
                            desc = 'Detail-oriented UI/UX Designer experienced in designing intuitive interfaces, conducting user research, and creating wireframes and prototypes to enhance user experience.'
                         />                        
                    </div>
                </div>
                {/* ----education sec---- */}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                        My <span className='text-cyan-300'>Education</span>
                    </h1>
                    <div className='mt-10' data-aos="fade-down-right" data-aos-delay="300" data-aos-duration="1000">
                        <ResumeCard 
                            Icon = {RiGraduationCapLine} 
                            role = 'UI Development Course'
                            desc=''
                            date = 'Feb 2018 - May 2018'
                         />
                         <ResumeCard 
                            Icon = {RiGraduationCapLine} 
                            role = 'Multimedia Course'
                            desc=''
                            date = 'Aug 2010 - May 2013'
                         />
                        <ResumeCard 
                            Icon = {RiGraduationCapLine} 
                            role = 'Bachelor of Science'
                            desc=''
                            date = 'Aug 2005 - May 2008'
                        />
                        <ResumeCard 
                            Icon = {RiGraduationCapLine} 
                            role = 'Council of Higher Secondary Education' 
                            desc=''
                            date = 'Aug 2003 - May 2005'
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Resume