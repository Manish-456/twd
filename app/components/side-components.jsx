import React from "react";
import { BsBookmarkCheck } from "react-icons/bs";
import Toggle from "./toggle";
import Profiles from "./profiles";

export function SideComponents() {
 
  return (
    <div className="flex flex-col w-full gap-x-2 md:gap-x-4">
      <div className="flex gap-x-2">
        <div className="flex flex-col relative self-end">
          <div className="absolute -top-16 right-4">
            <Toggle toggleState />
          </div>
          <div className="flex items-center pb-4 gap-x-2">
            <Toggle />
            <button className="bg-blue-700 text-xs md:text-sm font-[500] px-3 py-1 rounded-md text-white shadow-md">
              Button A
            </button>
          </div>
          <div className=" w-full ml-auto ">
            <div className="border shadow-md border-slate-300 gap-2 md:gap-4 rounded-md p-2 flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <BsBookmarkCheck size={15} className="text-slate-500" />
                <span className="text-xs">Bookmarks</span>
              </div>
              <div className="h-[20px]  w-0.5 bg-gray-400" />
              <div className="text-xs">12K</div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Profiles />
        </div>
      </div>
  
    </div>
  );
}
