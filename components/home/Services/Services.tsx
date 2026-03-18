import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <>
        <div className='py-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'
            data-aos = "fade-up">
                Collaborate with brand<br /> and agencies to create <br /><span className='text-cyan-300'>impactful results</span>
            </h1>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 
            mt-20 items-center' data-aos = "fade-up">
                <div>
                    <ServiceCard 
                        icon="/images/code.png" 
                        name = "UI and UX Design"
                        description = "Design interfaces that are intuitive, efficient and enjoyable to use."
                    />
                </div>
                <div>
                    <ServiceCard 
                        icon="/images/code.png" 
                        name = "UI and UX Design"
                        description = "Design interfaces that are intuitive, efficient and enjoyable to use."
                    />
                </div>
                <div>
                    <ServiceCard 
                        icon="/images/code.png" 
                        name = "UI and UX Design"
                        description = "Design interfaces that are intuitive, efficient and enjoyable to use."
                    />
                </div>
                <div>
                    <ServiceCard 
                        icon="/images/code.png" 
                        name = "UI and UX Design"
                        description = "Design interfaces that are intuitive, efficient and enjoyable to use."
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Services