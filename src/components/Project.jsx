import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub ,FaExternalLinkAlt} from "react-icons/fa";



const Project = ({image,title,techs,gitHub,demo}) => {
  return (
    <div className='relative w-full max-w-[25rem] text-white space-y-4 pb-12'>
       <div className='relative w-full h-56 z-0'>
         <Image
           src={image} 
           alt='/'
           objectFit='cover'
           width={400}
           height={400}
           className='w-full h-full duration-300 rounded-md hover:scale-105'
         />
       </div>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <div className='text-gray-500 font-semibold flex gap-3 flex-wrap'>
        {
        techs.map(item => {
          return(
            <span key={item}>{item.name}</span>
          )
        })
        }
        </div>
      <div className='absolute bottom-4 left-0 flex gap-6'>
        {gitHub && <Link href={`${gitHub}`} target='_blank' className='text-white hover:text-blue-700'>
          <FaGithub size={20}/>
        </Link>}
        {demo && <Link href={`${demo}`} target='_blank' className='text-white hover:text-blue-700'>
          <FaExternalLinkAlt size={20}/>
        </Link>}
      </div>
    </div>
  )
}

export default Project