"use client"
import { assetsImages } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import { CiDark } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const sideMenuRef = useRef();
    const openMobileMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMobileMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

  return (
    <div>
        {/* <div className="fixed top-0 right-0"></div> 
            ${isDarkMode ? "bg-gradient-to-r from-black-50 to-black-200 via-black-100": "bg-gradient-to-r from-gray-50 to-gray-200 via-gray-100"}
            ${isDarkMode ? "bg-black": "bg-white"}
        */}
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] h-28 py-4 flex items-center justify-between z-50 bg-gradient-to-r from-gray-50 to-gray-200 via-gray-100 dark:bg-gradient-to-tl dark:from-[#020024] dark:to-[#181819] dark:via-darkTheme dark:shadow-white/20`}>
            <a href='#top'>
                <Image src={isDarkMode ? assetsImages.gautamFeLogo: assetsImages.gautamLogo} alt='' priority={true} className='w-28 cursor-pointer mr-14 rounded-full border dark:border-gray-800' />
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-Outfit shadow-sm bg-opacity-50 bg-white  dark:text-white dark:border dark:border-white/50 dark:bg-transparent`}>
                <li><a href="#top" className=''>Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#service">What I do</a></li>
                <li><a href="#work">My Work</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>

            <div className='flex items-center gap-4'>
                <button className='w-3' onClick={()=>setIsDarkMode(prev=> !prev)}>
                   {isDarkMode ? <MdOutlineLightMode />:  <CiDark size='1.5rem'  />}
                </button>

                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>Contact <LuArrowUpRight /></a>

                <button className='block md:hidden ml-3' onClick={openMobileMenu}>
                    <RiMenu3Line size='1.5rem' />
                </button>
            </div>

            {/* ----Mobile Menu---- */}
            <div ref={sideMenuRef} onClick={closeMobileMenu} className='flex md:hidden fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-50 transition duration-500 dark:bg-darkHoveer dark:text-white'>
                <button className='absolute right-6 top-6' aria-label='close the menu'>
                    <RxCross2  size='2rem'/>
                </button>
                <ul className='flex flex-col gap-4 py-20 px-20 z-55'>
                    <li><a href="#top" className=''>Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#services">Service</a></li>
                    <li><a href="#work">My Work</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar