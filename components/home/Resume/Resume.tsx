import React from 'react';
import ResumeCard from './ResumeCard';
import { FaCodepen, FaReact } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const Resume = () => {
  return (
    <>
        <div className='py-20'>
            <div className='w-[90%] sm:[w-70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>   
                {/* ----work sec---- */}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                        My work <span className='text-cyan-300'>experience</span>
                    </h1>
                    <div className='mt-10'>
                        <ResumeCard Icon = {FaCodepen} role = 'Frontend Developer' />
                        <ResumeCard Icon = {FaReact} role = 'React Developer' />
                        <ResumeCard Icon = {MdDesignServices} role = 'UI and UX Designer' />
                    </div>
                </div>
                {/* ----education sec---- */}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                        My <span className='text-cyan-300'>Education</span>
                    </h1>
                    <div className='mt-10'>
                        <ResumeCard 
                            Icon = {FaCodepen} 
                            role = 'UI Development Course'
                            date = 'Feb 2023 - May 2023'
                         />
                        <ResumeCard 
                            Icon = {FaReact} 
                            role = 'Bachelor of Science'
                            date = 'Aug 2005 - May 2008'
                        />
                        <ResumeCard 
                            Icon = {MdDesignServices} 
                            role = 'Council of Higher Secondary Education' 
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