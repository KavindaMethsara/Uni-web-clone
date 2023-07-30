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
      className="link relative text-sm sm:text-base text-white font-semibold"
      onMouseEnter={() => setShowLine(true)}
      onMouseLeave={() => setShowLine(false)}
    >
      {text}
      <span
        className={`absolute w-full h-1 bg-white top-0 left-0 transform origin-left transition-transform duration-300 ${
          showLine ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
    </a>
  );
};

interface NavbarProps {
  fixed?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ fixed = false }) => {
  return (
    <div>
      <nav className="p-2 bg-transparent flex items-center justify-between">
        <a href="/" className="link">
          <h1 className="text-xl sm:text-2xl text-left cursor-pointer text-white">
            Stanford University
          </h1>
        </a>
        <div className="flex items-center gap-4">
          <div>
            <h2>Information for:</h2>
          </div>
          <NavLink href="/" text="Students" />
          <NavLink href="/" text="Faculty & Staff" />
          <NavLink href="/" text="Families" />
          <NavLink href="/" text="Visitors" />
          <NavLink href="/" text="Alumni" />
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


