import Image from "next/image"
import React from "react"

const About = () => {
  return (
    <section id="about" className="bg-[#252675] text-white pb-20">
        <div className="w-full flex flex-col justify-center items-center py-8">
             <h1 className="text-xl md:text-3xl">ABOUT ME</h1>
             <span className='w-12 h-1 bg-gray-600'></span>
        </div>
        <div className="container mx-auto h-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="">I{'\'m'} <span className="text-xl text-gray-400 py-2 font-semibold">Abderrezague ismail</span></p>
            <p className="text-md text-gray-100 py-2">
            Mern-stack Developer from Algeria. I am a student at the higher school of Computer Science (ESI Algiers ex.INI). 
            I{'\'ve'} always been fascinated with how things work. 
            fast forward to 5 years into school and i{'\'m'} now structuring, developing and implementing incredible web and mobile apps.
            </p>
            <p className="text-md text-gray-100 py-2">
            Believe i{'\'ve'} got the right skills and technologies to take your online presence on the level it truly deserves. 
            Your website should be your no1 sales agent and its works 
            24/7, Get a quote now thats best for your business.
            </p>
            <button className="p-4 my-4 bg-blue-600 text-white rounded-lg max-w-[15rem] hover:scale-110 hover:ml-4 duration-500">Download my resume</button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
             <Image width={400} height={400} src="/undraw_developer_activity_re_39tg.svg" alt="/" className="w-10/12 h-96"/>
        </div>
      </div>
    </section>
  )
}

export default About