import React from 'react'
import { FiSearch } from "react-icons/fi";
import {BsFolder2Open, BsHash} from 'react-icons/bs';
import {AiOutlineFileAdd, AiOutlineFolderAdd} from 'react-icons/ai';
import {BiPurchaseTagAlt} from 'react-icons/bi';

const features = [
    {
        id : 1,
        label : "Add new file",
        icon : AiOutlineFileAdd
    },
    {
        id : 2,
        label : "Add new folder",
        icon : AiOutlineFolderAdd
    },
    {
        id : 3,
        label : "Add hashtag...",
        icon : BsHash
    },
    {
        id : 4,
        label : "Add label...",
        icon : BiPurchaseTagAlt
    },
]
export const Search = () => {
  return (
    <div className='border shadow-md select-none rounded-md border-slate-400' >
       <div className="flex p-3 gap-x-2 items-center">
        <FiSearch size={15} color='gray' />
        <p className='text-slate-500 text-sm '>Search projects</p>
       </div>
       <div className='h-[0.5px] w-full bg-slate-200' />
       {/* Recent searches */}
       <div className="flex flex-col px-2 py-1 space-y-2">
                   <h3 className=' text-xs px-2 text-slate-600'>Recent Search</h3>
                <div className="flex text-slate-700 cursor-pointer px-2 py-1 rounded-md flex-row gap-2 hover:bg-blue-800 hover:text-white">
               <BsFolder2Open size={15} />
               <span className='truncate text-xs '>Tailwind Labs / Website Redesign</span>
                </div>
                   
                <div className="flex text-slate-700 cursor-pointer px-2 py-1 rounded-md  flex-row gap-2 hover:bg-blue-800 hover:text-white">
               <BsFolder2Open size={15} />
               <span className='truncate  text-xs '>Laravel LLC / Conference Branding</span>
                </div>
       </div>
       <div className='h-[0.5px] w-full bg-slate-200' />
         <div className="flex flex-col p-2 space-y-2">
          {
            features.map(feature => {
                const Icon = feature.icon;
                return (
                    <div key={feature.id}>
                     <div className="text-slate-700 flex cursor-pointer px-2 py-1 items-center rounded-md flex-row gap-2 hover:bg-blue-800 hover:text-white">
               <Icon size={20} />
               <span className='truncate text-xs'>{feature.label}</span>
                </div>
               
                    </div>
                )
            })
          }
         </div>
       
    </div>
  )
}

