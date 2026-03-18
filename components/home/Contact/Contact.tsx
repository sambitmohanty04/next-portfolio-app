import React from 'react';
import { BsEnvelope } from "react-icons/bs";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
        <div className='py-16'>
            <div className='w-[90%] sm:[w-70%] md:w-[80%] lg:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 
            items-center'>
                {/* ---------text-------- */}
                <div>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200'>
                        Schedule a call with me
                    </h1>
                    <p className='text-gray-400 mt-6 text-base sm:text-lg'>
                        Reach out to me today and let's discauss how I can 
                        help you achieve your goals.
                    </p>
                    <div className='mt-7'>
                        <div className='flex item-center space-x-3 mb-4'>
                            <FiPhoneCall className='w-7 h-7 text-cyan-300' />
                            <p className='text-xl font-semibold text-gray-400'>
                                +91 907-823-4876
                            </p>
                        </div>
                        <div className='flex item-center space-x-3 mb-4'>
                            <BsEnvelope className='w-7 h-7 text-cyan-300' />
                            <p className='text-xl font-semibold text-gray-400'>
                                sambit.jitu11@gmail.com
                            </p>
                        </div>
                        <div className='flex item-center space-x-3 mb-4'>
                            <FiMapPin className='w-7 h-7 text-cyan-300' />
                            <p className='text-xl font-semibold text-gray-400'>
                            Bhubaneswar, India
                            </p>
                        </div>
                    </div>
                    {/* ------social icons------ */}
                    <div className='flex items-center mt-7 space-x-3'>
                        <div className='w-10 h-10 bg-blue-950/60 flex items-center justify-center rounded-full
                        cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
                            <FaFacebookF className='w-5 h-5 text-white' />
                        </div>
                        <div className='w-10 h-10 bg-blue-950/60 flex items-center justify-center rounded-full
                        cursor-pointer flex-col hover:bg-sky-800 transition-all duration-300'>
                            <FaLinkedinIn className='w-5 h-5 text-white' />
                        </div>
                        <div className='w-10 h-10 bg-blue-950/60 flex items-center justify-center rounded-full
                        cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
                            <FaXTwitter className='w-5 h-5 text-white' />
                        </div>
                    </div>
                </div>
                {/* ----form---- */}
                <div className='md:p-10 p-5 bg-[#10102e] rounded-lg'>
                    <form className="mx-auto">
                        <input 
                            type='text' 
                            placeholder='Name'
                            className='w-full h-12 px-4 text-white outline-none rounded-md text-sm placeholder:text-sm
                            placeholder:text-white/70 border border-white/20 bg-[#23234b]'
                        />

                        <input 
                            type='email' 
                            placeholder='Email Address'
                            className='w-full h-12 px-4 text-white outline-none rounded-md text-sm placeholder:text-sm
                            placeholder:text-white/70 border border-white/20 bg-[#23234b]'
                        />

                        <input 
                            type='text' 
                            placeholder='Phone'
                            className='w-full h-12 px-4 text-white outline-none rounded-md text-sm placeholder:text-sm
                            placeholder:text-white/70 border border-white/20 bg-[#23234b]'
                        />

                        <textarea 
                            placeholder='Enter Message'
                            className='w-full h-32 px-4 py-2 mt-2 text-white outline-none rounded-md text-sm placeholder:text-sm
                            placeholder:text-white/70 border border-white/20 bg-[#23234b] resize-none'
                        ></textarea>

                        <button type='submit' className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 
                        transition-all duration-300 cursor-pointer text-white rounded-full text-sm'>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact