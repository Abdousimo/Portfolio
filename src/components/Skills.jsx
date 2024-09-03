import React from 'react'
import data from '@/data'

const Skills = () => {

   
  return (
    <section id='skills' className='bg-[#161753] pb-10'>
        <div className='w-full flex justify-center items-center pt-8'>
             <h1 id='section' className='text-white text-xl md:text-3xl'>MY SKILLS</h1>
        </div>
        <div className='flex w-full justify-center'>
        <div className='container flex items-center justify-center flex-wrap gap-x-16 gap-y-12 py-16'>
             {data.map(item=>(
              <div key={item} className='flex flex-col justify-center items-center'>
                <div className='relative w-16 h-16 md:w-20 md:h-20 hover:scale-110'>
                  <img src={item?.image} alt='/' width={20} height={20} className='object-contain w-full h-full'/>
                </div>
                <p className='text-sm text-white py-2'>{item?.name}</p>
              </div>
             ))}
        </div>
        </div>
    </section>
  )
}

export default Skills