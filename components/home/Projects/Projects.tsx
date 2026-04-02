"use client"
import React, {useState} from 'react'
import Image from 'next/image';

const projects = [
    {
        title: "Boat Selling Website",
        img: "/images/travel_1.png",
        desc: "Web Apps, React Development",
    },
    {
        title: "Medicine Website",
        img: "/images/medicine_website.png",
        desc: "Web Apps, UI Development",
    },
    {
        title: "Travelling Website",
        img: "/images/tourinrome.png",
        desc: "Web Apps, UI Development",
    },
    {
        title: "Switchblade Website",
        img: "/images/blade.png",
        desc: "Web Apps, UI Development",
    },
    {
        title: "Travelling Website",
        img: "/images/travels_2.png",
        desc: "Web Apps, UI Development",
    },
]

const Projects = () => {

    const initialCount = 3;

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(initialCount);

    const handleViewMore = () => {
        setLoading(true);

        setTimeout(() => {
            setVisible((prev) => prev + 3);
            setLoading(false);
        },  1000)
    }

    const handleViewLess = () => {
        setLoading(true);

        setTimeout(() => {
            setVisible(initialCount);
            setLoading(false);
        }, 800);
    }
  return (
    <>
        <div className='py-16 ' data-aos = "fade-up" id='projects'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-4xl font-bold text-white'>
                A Small Selection Of Recent <br /><span className='text-cyan-300'>Projects</span>
            </h1>
            <div className='w-[90%] sm:[w-70%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'>
                {
                    projects.slice(0, visible).map((item, index) => (
                        <div key={index} className="bg-white/5 p-3 rounded-xl">
                            <div className="w-full h-[300] overflow-hidden rounded-lg group">
                                <Image 
                                    src={item.img}
                                    alt={item.title}
                                    width={800}
                                    height={1400}
                                    className="w-full object-cover transition-transform duration-500 group-hover:translate-y-[-50%]"
                                />
                            </div>

                            <h1 className="mt-2 text-xl sm:text-2xl font-semibold text-white">
                                {item.title}
                            </h1>
                            <p className="pt-2 font-medium text-white/80 text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))
                }
                
                
            </div>
            <div className='flex justify-center items-center gap-4 mt-10'>
                {visible < projects.length && (
                    <button
                        onClick={handleViewMore}
                        disabled={loading}
                        className="px-5 py-3 text-sm bg-blue-700 hover:bg-blue-900 text-white rounded-lg transition"
                    >
                        {loading ? "Loading..." : "View More"}
                    </button>
                )}

                    {/* View Less */}
                {visible > initialCount && (
                    <button
                        onClick={handleViewLess}
                        disabled={loading}
                        className="px-5 py-3 text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                    >
                        {loading ? "Loading..." : "View Less"}
                    </button>
                )}
            </div>
            
        </div>
    </>
  )
}

export default Projects