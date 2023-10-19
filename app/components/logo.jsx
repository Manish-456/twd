import React from 'react'
import Image from 'next/image'

export function Logo() {
  return (
    <div className='flex items-center gap-x-2'>
    <Image src={'/tailwindcss.svg'}  width={40} height={40} alt='logo' />
    <h2 className={`text-2xl font-semibold`}>tailwind</h2>
  </div>
  )
}
