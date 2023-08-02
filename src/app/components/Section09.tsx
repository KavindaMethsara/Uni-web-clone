import React from 'react';

const Section09 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <div className="text-center mb-6">
        <h2 className="mt-24 text-5xl font-bold text-black">Admission</h2>
          </div>
          <div className="text-center mb-16">
        <p className="text-3xl leading-relaxed text-black">
        Offering extraordinary freedom to explore, to collaborate, and to <br/>challenge yourself
        </p>
      </div>
      <div className='ml-6 mr-6'>
        <img src="./Maya-admission.jpg" alt="Maya-admission" className='h-264 w-108'/>
      </div>

      <div className='flex justify-between w-full'>
      <div className="w-full">
        <div className='ml-6'>
          <h2 className="mt-6 text-xl font-bold text-black">Explore the possibilities of a Stanford education as you map out <br /> your college journey.</h2>
        </div>
        <div className="mt-3 ml-6">
          <p className="leading-relaxed text-black">We look for distinctive students who exhibit an abundance of energy and curiosity in <br /> their classes, activities, projects, research, and lives.</p>
        </div>
      </div>
      <div className="w-full">
      <div className='ml-6 mr-6'>
        <h2 className="mt-6 text-xl text-left font-bold text-black">Stanford meets the full financial need of every admitted undergrad who qualifies for assistance.</h2>
      </div>
      <div className="mt-3 ml-6 mr-6">
        <p className="text-left leading-relaxed text-black">Nearly 80% of undergrads receive some form of financial assistance. Generally, tuition is covered for families with incomes below $150,000.</p>
      </div>
        </div>
      </div>

      <div>
        <button className="bg-red-700 text-white px-4 py-2 text-2xl mt-6 mb-6 justify-center">More about admission</button>
      </div>
      <div>
        <img src="./dish-andrew-lg-2048x753.jpg" alt="dish-andrew-lg-2048x753" className='h-264 w-108'/>
      </div>
    </div>
  );
};

export default Section09;
