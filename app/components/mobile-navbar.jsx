"use client";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { BsArrowRightShort } from "react-icons/bs";
import Link from 'next/link';

export function MobileNavbar({ open, onClose }) {
  return (
    <>
      <div
        className={`min-h-screen shadow-slate-700 md:hidden ${
          open ? "block" : "hidden"
        } fixed z-[99] inset-0  backdrop-blur-sm`}
      />
      <div
     
        className={`md:hidden transition-all ${
          open ? "block" : "hidden"
        } min-h-screen z-[999] fixed w-[80%] inset-y-0 right-0 bg-white`}
      >
        <div className="flex p-4 flex-col">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative h-8 w-8">
              <Image src={"/tailwindcss.svg"} fill alt="logo" />
            </Link>
            <RxCross2
              size={20}
              role="button"
              className="hover:text-slate-500"
              onClick={onClose}
            />
          </div>
        </div>
        <div className="h-0.5 w-full my-6 bg-slate-100" />
        <div className="flex flex-col p-4">
          <ul
            role="list"
            className="flex flex-col my-8 gap-8 justify-center items-center"
          >
            <li className="navlinks">Components</li>
            <li className="navlinks">Templates</li>
            <li className="navlinks">Documentation</li>
          </ul>
          <div className="h-0.5 w-full my-6 bg-slate-100" />
           <div className="navlinks mb-8 text-center">Sign in</div>
          <button className="font-[500]  text-sm rounded-md flex items-center text-center justify-center hover:bg-black/60  bg-black text-white py-2  px-4">
            Get-all-access{" "}
            <BsArrowRightShort className="font-bold pt-1" size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
