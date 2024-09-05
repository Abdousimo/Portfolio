import React from 'react'
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Link from 'next/link';
import { FaFacebookF,FaGithub,FaLinkedinIn } from "react-icons/fa";



const Contact = () => {
  return (
    <section id='contact' className='bg-[#0F103F]'>
        
            <div className="w-full flex flex-col justify-center items-center py-8">
                <h1 className="text-white text-xl md:text-3xl">CONTACT ME</h1>
                <span className='w-12 h-1 bg-gray-600'></span>
            </div>
          <div className='flex flex-wrap container pb-10'>
            <div className='relative w-full lg:max-w-[50%] bg-transparent px-4 space-y-4 text-white'>
                  <h1 className='text-2xl font-semibold'>Contact Information</h1>
                  <p className='text-sm'>Do you Have projects ? or maybe just you want to say hello ? i{'\'m'} love to hear from you .</p>
                  <div className='px-2 space-y-6 pt-4'>
                      <div className='flex items-center gap-3'>
                        <span className='text-[#1a42e2]'>
                          <FaRegUser size={22}/>
                        </span>
                        <p>Abderrezague ismail</p>
                      </div>
                      <div className='flex items-center gap-3'>
                        <span className='text-[#1a42e2]'>
                          <IoIosCall size={22}/>
                        </span>
                        <p>+213 687 938 83</p>
                      </div>
                    <div className='flex items-center gap-3'>
                      <span className='text-[#1a42e2]'>
                        <MdOutlineEmail size={22}/>
                      </span>
                      <p>ki_abderrezague@esi.dz</p>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center lg:justify-end gap-10 pr-10 pt-14 pb-10'>
                   <Link href={'https://web.facebook.com/profile.php?id=100011474654394'} className='hover:text-[#1a42e2] duration-500'>
                     <FaFacebookF size={25}/>
                   </Link>
                   <Link href={'https://www.linkedin.com/in/ismail-abderrezague-907613200/'} className='hover:text-[#1a42e2] duration-500'>
                      <FaLinkedinIn size={25}/>
                   </Link>
                   <Link href={'https://github.com/Abdousimo'} className='hover:text-[#1a42e2] duration-500'>
                     <FaGithub size={25}/>
                   </Link>
                </div>
            </div>
            <form className='w-full lg:max-w-[50%] bg-transparent space-y-4'>
                <h1 className='text-white text-sm'>Send me a message to work together</h1>
                <div className='w-full flex-wrap'>
                  <input
                   type='text' 
                   placeholder='Full name' 
                   className='w-full mb-4 focus:outline-none p-2 bg-slate-100 text-gray-600 rounded'
                   required
                   />
                  <input 
                  type='email' 
                  placeholder='Your email' 
                  className='w-full focus:outline-none p-2 bg-slate-100 text-gray-600 rounded'
                  required
                  />
                </div>
               <input
                type='text' 
                placeholder='Subject' 
                className='w-full focus:outline-none p-2 bg-slate-100 text-gray-600 rounded'
                required
                />
               <textarea 
                 className='min-h-[8rem] w-full focus:outline-none p-2 bg-slate-100 text-gray-600 rounded'
                 placeholder='Enter your message'
                 required
               />
               <div className='flex justify-end'>
                  <button 
                    type='submit' 
                    className='px-4 py-2 bg-blue-700 hover:bg-blue-600 duration-500 text-white text-center text-base rounded-lg'>
                      Send message
                  </button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact