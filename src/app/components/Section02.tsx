import React from 'react';

const Section02 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Add the content for the section01 here */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-semibold mb-4">Campus News</h2>
      </div>
      <div className="text-center mb-36">
        <p className="text-3xl font-thin">
        Stories about people, research, and innovation across the Farm
        </p>
          </div>
      <div>
        <button className="bg-red-700 text-white px-4 py-2 text-2xl ">More campus news</button>
      </div>
    </div>
  );
};

export default Section02;
