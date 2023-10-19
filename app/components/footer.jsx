import React from 'react'
import { Logo } from './logo'

export default function Footer() {
    const date = new Date();
   const year = date.getFullYear();
  return (
    <div className='flex mt-24 flex-col items-center justify-center'>
       <Logo />
       <p className='text-slate-500 text-sm mt-2'>&#64; {year} Tailwind. All rights reserved.  </p>

       <div className="mt-12 flex items-center gap-x-3">
       <button className='font-[500] text-sm text-slate-700 hover:text-slate-600'>Privacy Policy</button>
       <button className='font-[500] text-sm text-slate-700 hover:text-slate-600'>Changelog</button>
       </div>
    </div>
  )
}
