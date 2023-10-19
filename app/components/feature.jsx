import React from 'react'

export default function Feature({feature}) {
  return (
    <div className='mt-12 '>
      <div className="w-fit  bg-slate-700/20 px-2 py-1 text-gray-700 hover:bg-blue-700 font-semibold text-xs  hover:text-white rounded-md cursor-pointer">{feature.badge}</div>
      <div className="flex mt-4 gap-2 flex-col">
        <h3 className='font-semibold ' >{feature.label}</h3>
        <p className='font-normal text-slate-800 text-sm'>{feature.desc}</p>
      </div>
    </div>
  )
}
