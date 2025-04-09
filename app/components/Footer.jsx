import { assetsImages } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { IoMdMail } from "react-icons/io";

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode ? assetsImages.gautamFeLogo: assetsImages.gautamLogo} alt='' className='w-28 mx-auto mb-2' />
            <div className='flex items-center gap-2 mx-auto w-max'>
                <IoMdMail size={20}/> gautam.govind04@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>@ 2025 Gautam Govind. All rights reserved. </p>
            <ul className='flex items-center justify-center mt-4 sm:mt-0'>
                <li>
                    <a target='_blank' href="">Github</a>
                </li>
                <li>
                    <a target='_blank' href="">Linkedin</a>
                </li>
                <li>
                    <a target='_blank' href="">Github</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer