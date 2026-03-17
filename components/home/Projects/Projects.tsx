import React from 'react'
import Image from 'next/image';

const Projects = () => {
  return (
    <>
        <div className='py-16 ' data-aos = "fade-up">
            <h1 className='text-center text-2xl md:text-4xl xl:text-4xl font-bold text-white'>
                A small selection of recent <br /><span className='text-cyan-300'>Projects</span>
            </h1>
            <div className='w-[90%] sm:[w-70%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'>
                <div>
                    <Image 
                        src="/images/p1.jpg"
                        alt = "images"
                        width = {800}
                        height = {650}
                        className = "rounded-lg"
                    />
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                        Modern Website
                    </h1>
                    <p className='pt-2 font-medium text-white/80 text-sm'>Web Apps, UI/UX</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects