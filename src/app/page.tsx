import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaRegComments, FaSearch } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen">
      
      <nav className=" p-4 flex items-center justify-between">
        <h1 className="text-xl sm:text-3xl text-left cursor-pointer font-bold text-white">
          Stanford University
        </h1>
        <div className="flex items-center gap-4">
          <div>
            <h1>
              Information for:
            </h1>
          </div>
             <a href="/login" className="link">
               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-white font-semibold">Students</h3>
               </div>
             </a>
             <a href="/Faculty & Staff" className="link">
               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-white font-semibold">Faculty & Staff</h3>
               </div>
             </a>
             <a href="/Families" className="link">
               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-white font-semibold">Families</h3>
               </div>
             </a>
            <a href="/Visitors" className="link">
               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-white font-semibold">Visitors</h3>
               </div>
             </a>
             <a href="/Alumni" className="link">
               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-white font-semibold">Alumni</h3>
            </div>
          </a>
          <div className="flex items-center">
            <FaSearch className="text-white" />
            <input
              type="text"
              placeholder="Search"
              className="bg-white text-gray-900 px-2 py-1 rounded-md focus:outline-none"
            />
          </div>
        </div>
      </nav>

      <div className="p-6 w-120">
        <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
            <a href="/login" className="link">
               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-white font-semibold">News</h3>
               </div>
            </a>
            <a href="/new_2" className="link">
               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-white font-semibold">Events</h3>
               </div>
            </a>
            <a href="/new_3" className="link">
               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-white font-semibold">Academics</h3>
               </div>
            </a>
            <a href="/new_4" className="link">
               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-white font-semibold">Research</h3>
               </div>
            </a>
            <a href="/new_5" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-white font-semibold">Health care</h3>
              </div>
            </a>
            <a href="/new_5" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-white font-semibold">Campus Life</h3>
              </div>
            </a>
            <a href="/new_5" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-white font-semibold">Admission</h3>
              </div>
            </a>
            <a href="/New/About" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-white font-semibold">About</h3>
              </div>
            </a>
        </div>
        </div>
      </div>
      <footer className="bg-gray-900 py-4 text-white text-center absolute bottom-0 left-0 w-full">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Stanford University. All rights reserved.
        </p>
      </footer>
    </div>
  );
}