'use client';
import React, { ReactNode, useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

interface NavLinkProps {
  href: string;
  text: React.ReactNode;
  isScrolled: boolean;
}

const NavLink = ({ href, text, isScrolled }: NavLinkProps) => {
  const [showLine, setShowLine] = useState(false);

  return (
    <a
      href={href}
      className="link relative text-sm sm:text-base font-semibold"
      onMouseEnter={() => setShowLine(true)}
      onMouseLeave={() => setShowLine(false)}
    >
      {text}
      <span className={`absolute mb-20 w-full h-1 bg-white top-0 left-0 transform scale-x-0 transition-all duration-300 ${showLine? 'scale-x-100' : ''}`}></span>
    </a>
  );
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div>
      <nav className={`p-1 bg-transparent flex justify-between fixed top-0 w-full z-10 ${scrolled ? 'bg-red-700' : 'bg-transparent'}`}>
        <a href="/" className="link">
          <h1 className="text-xl sm:text-2xl p-4 cursor-pointer text-white">
            Stanford University
          </h1>
        </a>
        <div className="flex items-center gap-4">
          <div>
            <h2>Information for:</h2>
          </div>
          <NavLink href="/Students" text="Students" isScrolled={false} />
          <NavLink href="/Faculty" text="Faculty & Staff" isScrolled={false} />
          <NavLink href="/Families" text="Families" isScrolled={false} />
          <NavLink href="/Visitors" text="Visitors" isScrolled={false} />
          <NavLink href="/Alumni" text="Alumni" isScrolled={false} />
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
