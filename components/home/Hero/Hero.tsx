"use client";
import React from 'react'
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import ParticleBg from "./ParticleBg";

const Hero = () => {
  return (
    <div className='flex justify-center items-center flex-col relative h-screen overflow-hidden text-white'>
        <ParticleBg />
        <div className='relative z-10 flex flex-col items-center'>
            <Image 
                src="/images/avtar.png"
                alt = "heroImg"
                width={150}
                height={150}
                className="rounded-full border-8 border-[#0c0c48aa]"
                data-aos = "fade-up"
            />
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 text-center font-bold 
            tracking-wide' data-aos = "fade-up">
                Creating Web Products, <br />
                brands <span className='text-cyan-200'> and experiences.</span>
            </h1>
            <h2 className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center' 
            data-aos = "fade-up">
                Hi! I'm Sambit - A Passionate 
                <span className='text-cyan-400 font-bold'>
                    <Typewriter options={{
                        strings: [
                            ' Frontend Developer',
                            ' React Developer',
                            ' UI Designer'
                        ],
                        autoStart: true,
                        loop : true,
                        delay :75,
                        deleteSpeed : 50,
                        wrapperClassName : "pl-2"
                    }}/>
                </span>
            </h2>
            <Link href="#projects">
                <button className='mt-6 px-10 py-3 bg-blue-700 hover:bg-blue-900 transition-all duration-300
                cursor-pointer rounded-full text-lg font-medium' data-aos = "fade-up">
                    <span>See My Work</span>
                    <BsArrowRight className='h-5 w-5 ml-2 inline-block' />
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Hero