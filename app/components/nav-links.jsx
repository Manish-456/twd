import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

export function NavLinks({onOpen}) {
  return (
    <>
      <div className="lg:flex hidden  gap-x-5 items-center">
        <ul className="flex items-center gap-x-8">
          <li className="navlinks">Components</li>
          <li className="navlinks">Templates</li>
          <li className="navlinks">Docs</li>
          <li>
            <FiSearch size={25} />
          </li>
        </ul>
        <div className="navlinks">Sign in</div>
        <div className="h-[25px] w-[1px] bg-slate-400" />
        <button className="font-[500] text-sm rounded-md flex items-center hover:bg-black/60  bg-black text-white py-2  px-4">
          Get-all-access{" "}
          <BsArrowRightShort className="font-bold pt-1" size={24} />
        </button>
      </div>
      <div className="lg:hidden flex items-center gap-x-8">
        <FiSearch size={25} />
        <AiOutlineMenu role="button" onClick={onOpen} size={25} />
      </div>
    </>
  );
}
