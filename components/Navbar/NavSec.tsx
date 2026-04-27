"use client";
import React, { useEffect, useState } from 'react'
import { NavLinks } from '@/constant/constant';
import { FaCode } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from 'next/link';

type Props = {
    openNav: () => void 
}

const NavSec = ({openNav} : Props) => {

    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true) 
            if (window.scrollY < 90) setNavBg(false)
        }
        window.addEventListener('scroll', handler)

        return () => window.removeEventListener('scroll', handler)
    }, [])

  return (
    <div className={`transition-all ${navBg ? "bg-[#0f142ee7] shadow-md": "fixed"} duration-200 h-[12vh] z-10000 fixed w-full text-white`}>
        <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
            {/*---- Logo ----*/}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                    <FaCode className='text-black w-5 h-5'/>
                </div>
                <h1 className='text-white hidden text-xl sm:block font-bold'>Sambit</h1>
            </div>
            {/*---- Navlinks ----*/}
            <div className='hidden lg:flex items-center space-x-10'>
                {
                    NavLinks.map((link) => {
                        return <Link key={link.id} href={link.url} className='text-base hover:text-cyan-300 text-white
                        font-medium transition-all duration-200'>
                            <p>{link.label}</p>
                        </Link>
                    })
                }
            </div>
            {/*---- Cv Button ----*/}
            <div className='flex items-center space-x-4'>
                <a href='Sambit_Mohanty_Resume.pdf' download>
                    <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-700 hover:bg-blue-900
                    transition-all duration-300 text-white flex items-center space-x-2'>
                        <BiDownload className='w-5 h-5' />
                        <span>Download CV</span>
                    </button>
                </a>
                {/*---- Burger menu ----*/}
                <HiOutlineMenuAlt3 onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
            </div>
        </div>
    </div>
  )
}

export default NavSec