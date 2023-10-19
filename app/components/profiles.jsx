import React from 'react'
import { Profile } from './profile';

const profiles = [
    {
        name : "Leonard Krasner",
        username : "@leonardkranser",
        imageUrl : '/leonard.jpg'
    },
    {
        name : "Floyd Miles",
        username : "@floydmiles",
        imageUrl : "/floyd.jpg"
    },
    {
        name : "Emily Selman",
        username : "@emilyselmon",
        imageUrl : "/emily.jpg"
    }
];

export default function Profiles() {
  return (
    <div  className='border select-none shadow-md rounded-md max-w-sm p-2 md:p-4 mx-auto border-slate-300 '>
        <div className="flex flex-col space-y-2">
       {
           profiles.map(profile => (
               <Profile key={profile.name} profile={profile} />
               ))
            }
            </div>
       <button className='w-full mt-2 py-1 md:py-2 hover:bg-slate-200 border text-sm md:text-xs border-slate-300 rounded-md'>View all</button>
    </div>
  )
}
