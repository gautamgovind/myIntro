import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { MdOutlineReadMore } from "react-icons/md";
import { motion } from "motion/react"


const Services = () => {
  return (
    <motion.div id='service' className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{duration: 1}}
    >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
            initial={{y:-20, opacity: 0 }} 
            whileInView={{ y:0, opacity: 1 }} 
            transition={{duration: 1, delay: 0.3}}
        >
            What I offer
        </motion.h4>
        <motion.h2 className='text-center text-5xl font-Ovo'
            initial={{y:-20, opacity: 0 }} 
            whileInView={{ y:0, opacity: 1 }} 
            transition={{duration: 0.5, delay: 0.7}}
        >
            My Services
        </motion.h2>
        <motion.p className='text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo'
            initial={{opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{duration: 0.6, delay: 0.7}}
        >
            This is the service section...
        </motion.p>

        <motion.div className="grid md:grid-cols-3 lg:grid-cols-4 grid-template-columns auto-rows-auto gap-6 my-10"
            initial={{opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{duration: 1, delay: 0.3}}
        >
            {serviceData.map(({icon, title, description, link}, index)=>(
                <motion.div key={index} 
                    className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHoveer dark:hover:shadow-white '
                    whileHover={{scale: 1.05}}
                >
                    <Image src={icon} alt='' className='w-10' />
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read more <MdOutlineReadMore /> </a>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services