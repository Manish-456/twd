import React from 'react'

export default function Banner() {
  return (
    <div className='max-w-[40rem] w-full'>
     <h3 className='font-bold text-3xl md:text-6xl pb-6'>Build your next idea even faster.</h3> 
     <p className='font-thin tracking-tight text-slate-600 text-lg lg:text-xl'>Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.</p>

     <div className="mt-8 flex md:flex-row md:w-auto w-full flex-col items-center gap-4 md:gap-8">
        <button className='dark-btn'>Browse components <span>&rarr;</span></button>
        <button className='outline'>Explore templates <span>&rarr;</span></button>
     </div>
    </div>
  )
}
