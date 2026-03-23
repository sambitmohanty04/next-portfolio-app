import React from 'react'
import Image from 'next/image';

const Projects = () => {
  return (
    <>
        <div className='py-16 ' data-aos = "fade-up" id='projects'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-4xl font-bold text-white'>
                A Small Selection Of Recent <br /><span className='text-cyan-300'>Projects</span>
            </h1>
            <div className='w-[90%] sm:[w-70%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'>
                <div>
                    <Image 
                        src="/images/medicine_website_1.png"
                        alt = "images"
                        width = {800}
                        height = {650}
                        className = "rounded-lg"
                    />
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                        Medicine Website
                    </h1>
                    <p className='pt-2 font-medium text-white/80 text-sm'>Web Apps, UI Developement</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects