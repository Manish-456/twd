"use client";

import React, { useState } from 'react'

export default function Toggle({toggleState = false}) {
    const [toggle, setToggle] = useState(toggleState);

    const onToggle = () => {
        setToggle(prev => !prev);
    }
  return (
    <div className={`h-6 w-10 md:w-12 rounded-xl shadow-md  ${toggle ? "bg-blue-500" : "bg-slate-300"}`}>
       <div onClick={onToggle} className={`h-6 w-6 cursor-pointer shadow-sm  bg-white rounded-full ${toggle ? 'ml-auto' : 'ml-0'} transition-all duration-300 delay-75`}/>
    </div>
  )
}
