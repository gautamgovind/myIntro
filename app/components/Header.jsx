import { assetsImages } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { BsDownload } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";


const Header = ({isDarkMode, seIsDarkMode}) => {
  return (
    <div className='w-11/!2 max-w-3xl pt-30 text-center mx-auto flex flex-col items-center justify-center gap-4'>
        <div >
            <Image
                src={assetsImages.author}
                alt='Gautam'
                className='rounded-full w-32'
            />
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Gautam Govind </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Fontend Developer in Gothenburg, Sweden</h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
            I am a FE developer and accessibility consutatnt
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'>Contact Me <FaArrowRight /></a>
            <a href="/GautamGovind.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My Resume <BsDownload /> </a>
        </div>
    </div>
  )
}

export default Header