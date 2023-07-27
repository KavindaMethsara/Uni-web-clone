import React from 'react'

const Home = () => {
  return (
        <div>
            <a href="/login" className="link">
               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-black font-semibold">News</h3>
               </div>
            </a>
            <a href="/new_2" className="link">
               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-black font-semibold">Events</h3>
               </div>
            </a>
            <a href="/new_3" className="link">
               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-black font-semibold">Academics</h3>
               </div>
            </a>
            <a href="/new_4" className="link">
               <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-black font-semibold">Research</h3>
               </div>
            </a>
            <a href="/new_5" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-black font-semibold">Health care</h3>
              </div>
            </a>
            <a href="/new_5" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-black font-semibold">Campus Life</h3>
              </div>
            </a>
            <a href="/new_5" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-black font-semibold">Admission</h3>
              </div>
            </a>
            <a href="/New/About" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                 <h3 className="text-sm sm:text-base text-black font-semibold">About</h3>
              </div>
            </a>
        </div>
  )
}

export default Home