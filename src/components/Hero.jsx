import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id='hero' className="min-h-[calc(100vh-80px)] bg-[#0F103F] shadow-lg mt-20 pt-20">
      <div className="container mx-auto h-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="text-2xl md:text-4xl text-gray-300 py-2 font-bold">Hello!👋🏻</p>
            <p className="text-2xl md:text-4xl text-gray-300 py-2 font-bold">My name is <span className="bg-gradient-to-r from-cyan-500 to-red-300 text-transparent bg-clip-text">Ismail</span></p>
            <p className="text-2xl md:text-4xl text-gray-300 py-2 font-bold bg-gradient-to-r from-cyan-500 to-red-300 text-transparent bg-clip-text">I{'\'m'} MERN stack devloper!</p>
            <p className="text-gray-300 py-2">Let me help you grow your business and make your product look pretty while at it</p>
            <Link href={"/#contact"} className="p-4 my-4 bg-blue-800 hover:bg-blue-600 text-white text-center rounded-lg max-w-[15rem] duration-500">Contact me</Link>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
             <Image width={400} height={400} src="/undraw_coding_re_iv62.svg" alt="/" className="w-10/12 h-96"/>
        </div>
      </div>
    </section>
  )
}

export default Hero