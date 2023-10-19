import {BsStars} from 'react-icons/bs';
import {AiOutlineRight} from 'react-icons/ai';

export  function Studio() {
  return (
    <div className='h-8 lg:hidden md:block hidden xl:block group border p-2 rounded-xl hover:border-slate-400 hover:shadow-sm transition cursor-pointer font-semibold text-xs'>
       <div className='flex items-center gap-x-2'>
        <BsStars size={14} fill='blue' />
        <p>Meet Studio . Our beautiful new agency site template</p>
        <AiOutlineRight
        size={14} className='group-hover:text-slate-500' />
       </div>
    </div>
  )
}
