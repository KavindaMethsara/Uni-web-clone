import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-6">
      <div className="text-center flex flex-col sm:flex-row px-9 items-center">
      <h1 className="ml-5 -mt-8 font-bold whitespace-pre-wrap">
          <span className="text-xl sm:text-3xl">Stanford</span> <br />
          <span className="text-base sm:text-xl">University</span>
        </h1>
        <div className="flex flex-col  -mt-0 items-start gap-2 ml-12 sm:ml-28">
          <div className="text-center sm:text-left flex bottom-0">
            <h2 className="font-bold mb-4">Stanford Home</h2>
            <h2 className="font-bold mb-4 ml-4">Maps & Directions</h2>
            <h2 className="font-bold mb-4 ml-4">Search Stanford</h2>
            <h2 className="font-bold mb-4 ml-4">Emergency Info</h2>
          </div>
          <div className="text-center -mt-4 sm:text-left flex">
            <h2 className="mb-4">Terms of Use</h2>
            <h2 className="mb-4 ml-4">Privacy</h2>
            <h2 className="mb-4 ml-4">Copyright</h2>
            <h2 className="mb-4 ml-4">Trademarks</h2>
            <h2 className="mb-4 ml-4">Non-Discrimination</h2>
            <h2 className="mb-4 ml-4">Accessibility</h2>
          </div>
          <div className='flex  -mt-4 text-base'>
            <p>&copy; {new Date().getFullYear()} Stanford University</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
