// import React from 'react'

// const page = () => {
//   return (
//     <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/University01.jpg')" }}>
//     <div className="flex flex-row gap-4 justify-center items-center">
//             <a href="/login" className="link">
//                <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
//                  <h3 className="text-sm sm:text-2xl text-white font-semibold">News</h3>
//                </div>
//             </a>
//             <a href="/new_2" className="link">
//                <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
//                  <h3 className="text-sm sm:text-2xl text-white font-semibold">Events</h3>
//                </div>
//             </a>
//             <a href="/new_3" className="link">
//                <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
//                  <h3 className="text-sm sm:text-2xl text-white font-semibold">Academics</h3>
//                </div>
//             </a>
//             <a href="/new_4" className="link">
//                <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
//                  <h3 className="text-sm sm:text-2xl text-white font-semibold">Research</h3>
//                </div>
//             </a>
//             <a href="/new_5" className="link">
//               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
//                  <h3 className="text-sm sm:text-2xl text-white font-semibold">Health care</h3>
//               </div>
//             </a>
//             <a href="/new_5" className="link">
//               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
//                  <h3 className="text-sm sm:text-2xl text-white font-semibold">Campus Life</h3>
//               </div>
//             </a>
//             <a href="/new_5" className="link">
//               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
//                  <h3 className="text-sm sm:text-2xl text-white font-semibold">Admission</h3>
//               </div>
//             </a>
//             <a href="/New/About" className="link">
//               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
//                  <h3 className="text-sm sm:text-2xl text-white font-semibold">About</h3>
//               </div>
//         </a>
//     </div>
//   </div>
    
//   )
// }

// export default page;
'use client';
import React, { useState } from 'react';

const NavLink = ({ href, children }) => {
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

const page = () => {
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

export default page;
