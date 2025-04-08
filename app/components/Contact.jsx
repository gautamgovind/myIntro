"use client"
import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Contact = ({isDarkMode, seIsDarkMode}) => {
    const [result, setResult] = useState("")
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7ccc01ec-0aa7-4990-9c0c-880ad8c77274");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-gradient-to-r from-gray-50 to-gray-350 via-gray-150'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
        <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
        <p className='text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo'>
            I'd love to hear from you! If you have any query, comments, or feedback please feel free to use the below form to submit your response.
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid md:grid-cols-2 grid-template-columns gap-6 mt-10 mb-8 '>
                <input type="text" name='name' placeholder='Enter your name' required className='flex-1 p-3 border-[0.5px] border-gray-400 rounded-md bg-white ' />
                <input type="email" name='email' placeholder='Enter your email' required className='flex-1 p-3 border-[0.5px] border-gray-400 rounded-md bg-white'  />
            </div>
            <textarea row='6' name='message' placeholder='Enter your message' required  className='w-full p-4 mb-6 border-[0.5px] border-gray-400 rounded-md bg-white '/>
            
            <button type='submit' className='py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>
                Submit <FaArrowRight />
            </button>

            <p className='mt-4'>
                {result}
            </p>
        </form>
    </div>
  )
}

export default Contact