'use client';
import React, { ReactNode, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface NavLinkProps {
  href: string;
  text: ReactNode;
}

const NavLink = ({ href, text }: NavLinkProps) => {
  const [showLine, setShowLine] = useState(false);

  return (
    <a
      href={href}
      className="link relative text-sm sm:text-base font-semibold"
      onMouseEnter={() => setShowLine(true)}
      onMouseLeave={() => setShowLine(false)}
    >
      {text}
      <span className={`absolute w-full h-1 top-0 left-0 transform origin-left transition-transform duration-300 ${
          showLine ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
    </a>
  );
  
};

interface NavbarProps {
  fixed?: boolean;
  fitsScreen?: boolean;
}

const Navbar = ({ fixed, fitsScreen }: NavbarProps) => {
  return (
    <div>
      <nav
        className={`flex h-10 p-7 items-center justify-between fixed w-full z-10 ${
          fixed && !fitsScreen ? 'bg-transparent text-white' : 'bg-transparent text-white'
        }`}
      >
        <a href="/" className={`link ${fixed && !fitsScreen ? 'text-white' : 'text-white'}`}>
          <h1 className="text-xl sm:text-2xl text-left cursor-pointer">
            Stanford University
          </h1>
        </a>
        <div className="flex gap-4 items-center ">
          <div>
            <h2>Information for:</h2>
          </div>
          <NavLink href="/" text="Students" />
          <NavLink href="/" text="Faculty & Staff" />
          <NavLink href="/" text="Families" />
          <NavLink href="/" text="Visitors" />
          <NavLink href="/" text="Alumni" />
          <div className="flex items-center gap-4 hover:bg-red-700 p-2 cursor-pointer">
            <FaSearch className={`text-${fixed && !fitsScreen ? 'white' : 'white'}`} />
            <h3 className={`text-sm sm:text-base ${fixed && !fitsScreen ? 'text-white' : 'text-white'} font-semibold`}>Search</h3>
          </div>
        </div>
      </nav>
    </div>
  );
};


export default Navbar;


