import React from 'react'
import ServiceCard from './ServiceCard'
import { FaCode, FaDev} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";


const Services = () => {
  return (
    <>
        <div className='py-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'
            data-aos = "fade-up">
                Work together to deliver impactful<br /> <span className='text-cyan-300'> and result-driven digital solutions.</span>
            </h1>
            <div className='w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 
            mt-20 items-center' data-aos = "fade-up">
                <div>
                    <ServiceCard 
                        icon={FaCode}
                        name = "UI and UX Design"
                        description = "Design intuitive and user-friendly interfaces that enhance usability and improve user satisfaction."
                    />
                </div>
                <div>
                    <ServiceCard 
                        icon={FaDev} 
                        name = "Web Development"
                        description = "Build fast, responsive, and scalable web applications using modern technologies and best practices."
                    />
                </div>
                <div>
                    <ServiceCard 
                        icon={MdDesignServices} 
                        name = "Photoshop Design"
                        description = "Create visually stunning graphics, edits, and compositions using advanced Photoshop techniques."
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Services