import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='bg-[#252675]'>
        
            <div className="w-full flex flex-col justify-center items-center py-8">
                <h1 className="text-white text-xl md:text-3xl">CONTACT ME</h1>
                <span className='w-12 h-1 bg-gray-600'></span>
            </div>
          <div className='flex flex-wrap container'>
            <div className='w-full lg:max-w-[50%] bg-transparent'>

            </div>
            <form className='w-full lg:max-w-[50%] bg-transparent space-y-4 pb-4'>
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