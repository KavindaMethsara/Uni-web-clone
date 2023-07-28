'use client';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const NavLink = ({ href, text }) => {
  const [showLine, setShowLine] = useState(false);

  return (
    <a
      href={href}
      className="link relative text-sm sm:text-base text-white font-semibold"
      onMouseEnter={() => setShowLine(true)}
      onMouseLeave={() => setShowLine(false)}
    >
      {text}
      <span
        className={`absolute w-full h-1 bg-transparent gap-4 top-0 left-0 right-0 transition-all duration-300 ${
          showLine ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
    </a>
  );
};

const Navbar = () => {
  return (
    <div>
      <nav className="p-2 bg-transparent flex items-center justify-between">
        <a href="/Home" className="link">
          <h1 className="text-xl sm:text-2xl text-left cursor-pointer text-white">
            Stanford University
          </h1>
        </a>
        <div className="flex items-center gap-4">
          <div>
            <h2>Information for:</h2>
          </div>
          <NavLink href="/Students" text="Students" />
          <NavLink href="/Faculty" text="Faculty & Staff" />
          <NavLink href="/Families" text="Families" />
          <NavLink href="/Visitors" text="Visitors" />
          <NavLink href="/Alumni" text="Alumni" />
          <div className="flex items-center gap-4 hover:bg-red-700 p-2 cursor-pointer">
            <FaSearch className="text-white" />
            <h3 className="text-sm sm:text-base text-white font-semibold">Search</h3>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


