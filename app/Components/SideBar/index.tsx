"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaBookmark, FaHome } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { BiMap } from "react-icons/bi";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão para abrir o menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className= {`fixed top-5 left-5 z-[999] bg-white p-2.5 rounded-md shadow-lg pointer ${isOpen ? "hidden": "block"}`}
      >
        <RiMenu3Fill size={30} color="blue" className="cursor-pointer" />
      </button>

      {/* Menu lateral */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-[998]
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-5">
          <h2 className="text-lg flex font-semibold items-center">
            <RiMenu3Fill
              size={30}
              color="blue"
              onClick={() => setIsOpen(false)}
              className="mr-3 cursor-pointer"
            />
            Menu
          </h2>

          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/v1/search-coordinates"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"
              >
                <FaHome size={20} className="mr-3" />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/v1/saved-coordinates"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"
              >
                <FaBookmark size={20} className="mr-3" />
                Saved Sensor
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"
              >
                <BiMap size={20} className="mr-3" />
                Sensor Group
              </a>
            </li>
            <li>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded w-full"
              >
                <IoMdCloseCircle size={20} color="red" className="mr-3" />
                Close Menu
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
