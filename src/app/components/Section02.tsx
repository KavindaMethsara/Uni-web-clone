import React from 'react';

const Section02 = () => {
  return (
    <div className="min-h-screen flex flex-col p-12 bg-white">
      {/* Add the content for the section01 here */}
      <div className="text-center items-center justify-center mb-16">
        <h2 className="text-5xl text-black font-semibold mb-4">Campus News</h2>
      </div>
      <div className="text-center mb-28 items-center justify-center">
        <p className="text-4xl text-black font-thin">
          Stories about people, research, and innovation across the Farm
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg p-2">
          <img src="./cmps news-card01.jpg" alt="" className='w-full h-full' />
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-lg p-2">
        <img src="./cmps news-card02.jpg" alt="" className='w-full h-full' />
          {/* Content for Card 2 */}
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-lg p-2">
        <img src="./cmps news-card03.jpg" alt="" className='w-full h-full' />
          {/* Content for Card 3 */}
        </div>
        {/* Card 4 */}
        <div className="bg-white shadow-lg p-2">
        <img src="./cmps news-card04.jpg" alt="" className='w-full h-full' />
        </div>
        {/* Card 5 */}
        <div className="bg-white shadow-lg p-2">
        <img src="./cmps news-card05.jpg" alt="" className='w-full h-full' />
          {/* Content for Card 5 */}
        </div>
        {/* Card 6 */}
        <div className="bg-white shadow-lg p-2">
        <img src="./cmps news-card06.jpg" alt="" className='w-full h-full' />
          {/* Content for Card 6 */}
        </div>
      </div>
      <div className='text-center items-center justify-center'>
        <button className="bg-red-700 text-white px-4 py-2 text-2xl mt-24">
          More campus news
        </button>
      </div>
    </div>
  );
};

export default Section02;
