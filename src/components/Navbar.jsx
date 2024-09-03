"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { IoClose, IoReorderThreeOutline } from "react-icons/io5";
import { Italiana } from 'next/font/google';

const italiana = Italiana({subsets:["latin"],weight:"400"})

const Navbar = () => {
    const [open,setOpen] = useState(false)
  return (
    <nav>

        {/*Desktop nav*/}
        <div className='h-20 w-full flex items-center justify-between px-4 lg:px-8 shadow-md fixed top-0 z-20 bg-[#13144c]'>
            <Link className={italiana.className} href={'/'}>
                 <h1 className="text-2xl text-white">Ismail.</h1>
            </Link>
            <ul className='lg:flex justify-between items-center gap-8 hidden'>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                   <Link href={'/#hero'}>
                      Home
                    </Link>
                </li>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                    <Link href={'/#about'}>
                        About me
                    </Link>
                </li>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                    <Link href={'/#works'}>
                        Works
                    </Link>
                </li>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                    <Link href={'/#skills'}>
                        Skills
                    </Link>
                </li>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                    <Link href={'/#contact'}>
                        Contact
                    </Link>
                </li>
           </ul>
           {open ?
           <button onClick={()=>setOpen(!open)} className='block lg:hidden text-white duration-500'>
                <IoClose size={30}/>
           </button>
           :
           <button onClick={()=>setOpen(!open)} className='block lg:hidden text-white duration-500'>
                <IoReorderThreeOutline size={30}/>
           </button>
           }
        </div>
        <div className={`h-screen w-full fixed top-0 z-10 bg-black/70 p-2 duration-500 ${open ? "left-0" : "-left-[1000rem]"}`}>
           <ul className='h-[calc(100vh-80px)] mt-20 flex flex-col items-end gap-8 p-10'>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                   <Link onClick={()=>setOpen(!open)} href={'/#hero'}>
                      Home
                    </Link>
                </li>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                    <Link href={'/#about'}>
                        About me
                    </Link>
                </li>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                    <Link href={'/#works'}>
                        Works
                    </Link>
                </li>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                    <Link href={'/#skills'}>
                        Skills
                    </Link>
                </li>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                    <Link href={'/#contact'}>
                        Contact
                    </Link>
                </li>
           </ul>
        </div>
    </nav>
  )
}

export default Navbar