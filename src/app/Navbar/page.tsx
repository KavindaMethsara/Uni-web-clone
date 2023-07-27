import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
      <div>
      <nav className=" bg-red-700 p-2 flex items-center justify-between">
      <a href="/Home" className="link">
          <h1 className="text-xl sm:text-2xl text-left cursor-pointer text-white">Stanford University</h1>
          </a>
        <div className="flex items-center gap-4">
          <div>
            <h1>
              Information for:
            </h1>
          </div>
             <a href="/Students" className="link">
               <div className="flex items-center gap-4 hover:bg-gray-600 p-2 cursor-pointer">
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
    </div>
  )
}

export default Navbar