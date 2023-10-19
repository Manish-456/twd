import Image from "next/image";
import React from "react";

export function Profile({ profile }) {
  return (
    <div className="flex justify-between border-b  pb-4 items-center gap-x-4">
      <div className="flex gap-x-4">
        <div className="h-8 w-8 relative rounded-full">
          <Image
            alt={profile.username}
            src={profile.imageUrl}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-[10px] md:text-sm">{profile.name}</h4>
          <span className="text-[10px] md:text-xs text-zinc-700 ">{profile.username}</span>
        </div>
      </div>

      <button className="text-xs md:text-sm md:px-4 px-2 py-1 md:py-2 border rounded-md border-slate-300 hover:bg-slate-200">View</button>
    </div>
  );
}
