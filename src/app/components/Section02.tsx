import React from 'react';

const Section02 = () => {
  return (
    <div className="min-h-screen flex flex-col p-12 bg-slate-100">
      {/* Add the content for the section01 here */}
      <div className="text-center items-center justify-center mb-16">
        <h2 className="text-5xl text-black font-bold mb-4">Campus News</h2>
      </div>
      <div className="text-center mb-28 items-center justify-center">
        <p className="lg:text-4xl text-black font-thin">
          Stories about people, research, and innovation across the Farm
        </p>
      </div>
      <div className="grid sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="col-span-2 bg-white shadow-lg p-2">
        <img src="./cmps news-card01.jpg" alt="" className='w-full h-96' />
        </div>
        {/* Card 2 */}
        <div className="max-w-sm bg-white p-2">
          <a href="#">
              <img src="./cmps news-card02.jpg" alt="" className="w-full h-auto"/>
          </a>
          <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900">SCIENCE & TECHNOLOGY</h5>
            <a href="#">
              <p className="mb-3 font-bold text-black hover:text-blue-700">Mosquito diseases on the move</p>
            </a>
          </div>
        </div>
        {/* Card 3 */}
        <div className="max-w-sm bg-white p-2">
          <a href="#">
              <img src="./cmps news-card03.jpg" alt="" className="w-full h-auto"/>
          </a>
          <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900">SOCIAL SCIENCES</h5>
            <a href="#">
              <p className="mb-3 font-bold text-black hover:text-blue-700">How a CEO’s personality affects corporate culture</p>
            </a>
          </div>
        </div>
        {/* Card 4 */}
        <div className="max-w-sm bg-white p-2">
          <a href="#">
              <img src="./cmps news-card04.jpg" alt="" className="w-full h-auto"/>
          </a>
          <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900">MEDICINE</h5>
            <a href="#">
              <p className="mb-3 font-bold text-black hover:text-blue-700">Inclusive data is a boon to LGBTQ health researchers</p>
            </a>
          </div>
        </div>
        {/* Card 5 */}
        <div className="max-w-sm bg-white p-2">
          <a href="#">
              <img src="./cmps news-card05.jpg" alt="" className="w-full h-auto"/>
          </a>
          <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900">UNIVERSITY AFFAIRS</h5>
            <a href="#">
              <p className="mb-3 font-bold text-black hover:text-blue-700">Stanford Board of Trustees release of report and announcements</p>
            </a>
          </div>
        </div>
        {/* Card 6 */}
        <div className="col-span-2 bg-white shadow-lg p-2">
        <img src="./cmps news-card06.jpg" alt="" className='w-full h-96' />
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
