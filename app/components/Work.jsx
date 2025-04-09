import { workData } from '@/assets/assets'
import React from 'react'
import { BsFillSendFill } from "react-icons/bs";
import { MdOutlineReadMore } from "react-icons/md";
import { motion } from "motion/react"


const Work = () => {
  return (
    <motion.div id='work' className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{duration: 1}}
    >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
            initial={{y:-20, opacity: 0 }} 
            whileInView={{ y:0, opacity: 1 }} 
            transition={{duration: 0.5, delay: 0.3}}
        >
            My Contribution
        </motion.h4>
        <motion.h2 className='text-center text-5xl font-Ovo'
            initial={{y:-20, opacity: 0 }} 
            whileInView={{ y:0, opacity: 1 }} 
            transition={{duration: 0.5, delay: 0.3}}
        >
            My latest work
        </motion.h2>
        <motion.p className='text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo'
            initial={{opacity: 0 }} 
            whileInView={{ pacity: 1 }} 
            transition={{duration: 0.5, delay: 0.3}}
        >
            Here my works will go..
        </motion.p>

        <motion.div className="grid md:grid-cols-3 lg:grid-cols-4 grid-template-columns gap-5 dark:text-black"
            initial={{opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{duration: 0.6, delay: 0.7}}
        >
            {workData.map(({title, description, bgImage},index)=>(
                <motion.div key={index} 
                    className='aspect-square bg-no-repeat bg-gray-500 border border-gray-600 bg-cover bg-center rounded-lg relative cursor-pointer group' 
                    style={{ backgroundImage: `url("${bgImage}")` }}
                    whileHover={{scale:1.05}}
                    transition={{duration: 0.3}}  
                >
                    <div className="min-h-[128px] bg-white w-10/11 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className='font-semibold'>{title}</h2>
                                <p className='text-sm text-gray-700'>{description}</p>
                            </div>
                            <div className='border rounded-full flex items-center justify-center border-black w-9 aspect-square shadow-[2px_2px_0_#000] group-hover:bg-gray-400 transition'>
                                <BsFillSendFill />
                            </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
        <motion.a 
            href="" 
            className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 my-20 mx-auto hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHoveer'
            initial={{opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{duration: 0.5, delay: 0.7}}
        >
            Show more <MdOutlineReadMore />
        </motion.a>
    </motion.div>
  )
}

export default Work