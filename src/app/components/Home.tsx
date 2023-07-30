'use client';
import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}
const NavLink = ({ href, children }: NavLinkProps) => {
  const [showLine, setShowLine] = useState(false);

  return (
    <a
      href={href}
      className="link relative text-sm sm:text-2xl text-white font-semibold"
      onMouseEnter={() => setShowLine(true)}
      onMouseLeave={() => setShowLine(false)}
    >
      {children}
      <span className={`absolute w-full h-1 bg-white bottom-0 left-0 transform scale-x-0 transition-transform duration-300 ${showLine ? 'scale-x-100' : ''}`}></span>
    </a>
  );
};

const Home = () => {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/University01.jpg')" }}>
      <div className="flex flex-row gap-4 justify-center items-center">
        <NavLink href="/login">News</NavLink>
        <NavLink href="/new_2">Events</NavLink>
        <NavLink href="/new_3">Academics</NavLink>
        <NavLink href="/new_4">Research</NavLink>
        <NavLink href="/new_5">Health care</NavLink>
        <NavLink href="/new_6">Campus Life</NavLink>
        <NavLink href="/new_7">Admission</NavLink>
        <NavLink href="/New/About">About</NavLink>
      </div>
    </div>
  );
};

export default Home;
