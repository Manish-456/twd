import React from 'react'

export  function BreadCrumb() {
  return (
    <div className='flex items-center border border-gray-100 rounded-md select-none mt-4 bg-white shadow-md p-2  gap-x-3'>
        <p className='text-xs hover:text-gray-600'>Years</p>
        <div className='h-[15px] w-[1px] bg-gray-500'/>
        <p className='text-xs hover:text-gray-600'>Months</p>
        <div className='h-[15px] w-[1px] bg-gray-500'/>
        <p className='text-xs hover:text-gray-600'>Days</p>
    </div>
  )
}
