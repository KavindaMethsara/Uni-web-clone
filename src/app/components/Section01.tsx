import React from 'react';

const Section01 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-2">
      {/* Add the content for the section01 here */}
      <div className="text-center mb-16">
        <h2 className="sm:text-xl lg:text-5xl text-black font-bold mb-4">A Purposeful University</h2>
      </div>
      <div className="text-center mb-16">
        <p className="lg:text-4xl text-black font-thin ">
        Stanford was founded almost 150 years ago on a bedrock of societal purpose.
        Our mission is to contribute to the world by educating students for lives of leadership and purposeful contribution;
        advancing fundamental knowledge and cultivating creativity; and accelerating solutions and amplifying their impact.
        </p>
      </div>
      <div>
        <button className="bg-red-700 text-white px-4 py-2 text-2xl ">More about Stanford</button>
      </div>
    </div>
  );
};

export default Section01;
