'use client';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'

const page = () => {
  const [showLine, setShowLine] = useState(false);
  return (
      <div>
      <nav className=" bg-black p-2 flex items-center justify-between">
      <a href="/Home" className="link">
          <h1 className="text-xl sm:text-2xl text-left cursor-pointer text-white">Stanford University</h1>
          </a>
        <div className="flex items-center gap-4">
          <div>
            <h1>
              Information for:
            </h1>
          </div>
          <a
            href="/Students"
            className="link"
            onMouseEnter={() => setShowLine(true)}
            onMouseLeave={() => setShowLine(false)}
          >
            <div className="relative">
              <h3 className="text-sm sm:text-base text-white font-semibold">Students</h3>
              <div
                className={`${
                  showLine ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-200 absolute -bottom-1 top-0 left-0 right-0 h-0.5 bg-red-700`}
              />
            </div>
          </a>
          <a
            href="/Faculty"
            className="link"
            onMouseEnter={() => setShowLine(true)}
            onMouseLeave={() => setShowLine(false)}
          >
            <div className="relative">
              <h3 className="text-sm sm:text-base text-white font-semibold">Faculty & Staff</h3>
              <div
                className={`${
                  showLine ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-200 absolute -bottom-1 top-0 left-0 right-0 h-0.5 bg-red-700`}
              />
            </div>
          </a>
          <a
            href="/Families"
            className="link"
            onMouseEnter={() => setShowLine(true)}
            onMouseLeave={() => setShowLine(false)}
          >
            <div className="relative">
              <h3 className="text-sm sm:text-base text-white font-semibold">Families</h3>
              <div
                className={`${
                  showLine ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-200 absolute -bottom-1 top-0 left-0 right-0 h-0.5 bg-red-700`}
              />
            </div>
          </a>
          <a
            href="/Visitors"
            className="link"
            onMouseEnter={() => setShowLine(true)}
            onMouseLeave={() => setShowLine(false)}
          >
            <div className="relative">
              <h3 className="text-sm sm:text-base text-white font-semibold">Visitors</h3>
              <div
                className={`${
                  showLine ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-200 absolute -bottom-1 top-0 left-0 right-0 h-0.5 bg-red-700`}
              />
            </div>
          </a>
          <a
            href="/Alumni"
            className="link"
            onMouseEnter={() => setShowLine(true)}
            onMouseLeave={() => setShowLine(false)}
          >
            <div className="relative">
              <h3 className="text-sm sm:text-base text-white font-semibold">Alumni</h3>
              <div
                className={`${
                  showLine ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-200 absolute -bottom-1 top-0 left-0 right-0 h-0.5 bg-red-700`}
              />
            </div>
          </a>
          <div
            className="flex items-center gap-4 hover:bg-red-700 p-2 cursor-pointer">
            <FaSearch className="text-white" />
            <h3 className="text-sm sm:text-base text-white font-semibold">Search</h3>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default page;