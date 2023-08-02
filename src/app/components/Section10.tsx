import { FaFacebookSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';

const Section10 = () => {
  return (
    <div className="flex mr-12 h-20 bg-slate-100 gap-3 w-full justify-end items-center" >
      <div className=''>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare className='text-black h-10 w-10 hover:text-blue-700'/>
      </a>
      </div>
      <div>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <BsTwitter className='text-black h-10 w-10 hover:text-blue-700'/>
      </a>
      </div>
      <div>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FiInstagram className='text-black h-10 w-10 hover:text-red-700'/>
      </a>
      </div>
      <div>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className='text-black h-10 w-10 hover:text-blue-700'/>
      </a>
      </div>
      <div>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube className='text-black h-10 w-10 hover:text-red-700'/>
      </a>
      </div>
      <div className='mr-8'>
      <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">
          <BsApple className='text-black h-10 w-10 hover:text-slate-700'/>
      </a>
      </div>
    </div>
  );
};

export default Section10;
