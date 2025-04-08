import { workData } from '@/assets/assets'
import React from 'react'
import { BsFillSendFill } from "react-icons/bs";
import { MdOutlineReadMore } from "react-icons/md";


const Work = ({isDarkMode, seIsDarkMode}) => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>My Contribution</h4>
        <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>
        <p className='text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo'>
            Here my works will go..
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-template-columns gap-5">
            {workData.map(({title, description, bgImage},index)=>(
                <div key={index} className='aspect-square bg-no-repeat bg-gray-500 border border-gray-600 bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url("${bgImage}")` }}>
                    <div className="min-h-[128px] bg-white w-10/11 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className='font-semibold'>{title}</h2>
                                <p className='text-sm text-gray-700'>{description}</p>
                            </div>
                            <div className='border rounded-full flex items-center justify-center border-black w-9 aspect-square shadow-[2px_2px_0_#000] group-hover:bg-gray-400 transition'>
                                <BsFillSendFill />
                            </div>
                    </div>
                </div>
            ))}
        </div>
        <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 my-20 mx-auto hover:bg-lightHover duration-500'>Show more <MdOutlineReadMore /> </a>
    </div>
  )
}

export default Work