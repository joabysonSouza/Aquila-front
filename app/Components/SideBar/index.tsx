"use client"
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { BiMap } from "react-icons/bi";

   // TODO CRIAMDO MENU LATERAL

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="absolute top-5 right-0 z-999 bg-white p-2.5 rounded-md shadow-lg">
        <RiMenu3Fill size={30} color="blue" onClick={()=> setIsOpen(!isOpen)} className="cursor-pointer"/>

        <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "-translate-x-1" : "translate-x-80"
        }`}
      >
        <div className="p-5">
          <h2 className="text-lg flex font-semibold">
          <RiMenu3Fill size={30} color="blue" onClick={()=> setIsOpen(!isOpen)} className="mx-3 cursor-pointer"/>Menu  
            
            </h2>
         
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="p-2 flex text-gray-700 hover:bg-gray-200 rounded">
              
             <FaBookmark size={20} className="mr-3"/>  saved sensor
              </a>
            </li>
            <li>
              <a href="#" className="flex p-2 text-gray-700 hover:bg-gray-200 rounded">
              <BiMap size={20} className="mr-3"/>Sensor group 
              </a>
            </li>
            <li onClick={()=> setIsOpen(false)}>
              <a href="#" className="flex p-2 text-gray-700 hover:bg-gray-200 rounded">
              <IoMdCloseCircle size={20} color="red" className="mr-3"   /> close menu
              </a>
            </li>
          </ul>
        </div>
      </aside>
    
    </div>
  );
}

