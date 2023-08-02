import React from 'react';

const Section08 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-100">
      <div className="text-center mb-6">
        <h2 className="mt-24 text-5xl font-bold text-black">Athletics</h2>
          </div>
          <div className="text-center mb-16">
        <p className="text-3xl leading-relaxed text-black">
        Providing student-athletes the opportunity to achieve excellence <br/> cboth in competition and in the classroom
        </p>
      </div>

      <div className='flex justify-between w-full'>
      <div className="w-full">
        <div className='ml-6'>
          <h2 className="mt-6 text-xl font-bold text-black">Home of Champions</h2>
        </div>
        <div className="mt-3 ml-6">
          <p className="leading-relaxed text-black">Stanford’s 134 NCAA championships are the most for any university, a product of an unrivaled culture of excellence and continued support from the campus community</p>
        </div>
      </div>
      <div className="w-full">
      <div >
        <h2 className="mt-6 text-xl text-left font-bold text-black">Olympic Excellence</h2>
      </div>
      <div className="mt-3 ml-6 mr-6">
        <p className="text-left leading-relaxed text-black">The Cardinal has produced at least one medalist in every Olympics in which the U.S. has competed since 1912, totaling 296 medals from 177 medalists</p>
      </div>
        </div>
      </div>
      <div className="w-full">
      <div className='ml-6 mr-6'>
        <h2 className="mt-6 text-xl text-left font-bold text-black">Multidimensional Impact</h2>
      </div>
      <div className="mt-3 ml-6 mr-6">
        <p className="text-left leading-relaxed text-black">Stanford student-athletes have achieved local, national, and global impact through community involvement and advocacy</p>
      </div>
      </div>
      
      <div>
        <button className="bg-red-700 text-white px-4 py-2 text-2xl mt-6 mb-6 justify-center">More about athletics</button>
      </div>
    </div>
  );
};

export default Section08;
