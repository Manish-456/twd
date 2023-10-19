import React from 'react'
import Banner from './banner'
import { SideComponents } from './side-components'

export  function Hero() {
  return (
    <div>
      <h3 className='pb-8 font-semibold text-sky-500'>By the makers of Tailwind CSS</h3>
      <div className="flex gap-6 md:flex-row  flex-col">
      <Banner/>
       {/* <Toggle /> */}
       <div className="flex-1">

       <SideComponents />
       </div>
      </div>

    </div>
  )
}
