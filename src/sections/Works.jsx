import React from 'react'
import Project from '@/components/Project'
import { WorksArray } from '@/data'

const Works = () => {
  return (
    <section id='work' className='bg-[#14166c] pb-10'>
        <div className="w-full flex flex-col justify-center items-center py-8">
                <h1 className="text-white text-xl md:text-3xl">WORK</h1>
                <span className='w-12 h-1 bg-gray-600'></span>
            </div>
        <div className='container flex justify-center lg:justify-start flex-wrap gap-x-6 gap-y-14'>
            {
              WorksArray.map((project) => (
                <Project 
                  key={project.id}
                  image={project.image}
                  title={project.title}
                  techs={project.techs}
                  gitHub={project.gitHub}
                  demo={project.demo}
                />
              ))
            }
        </div>
    </section>
  )
}

export default Works