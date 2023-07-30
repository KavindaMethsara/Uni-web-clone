'use client';
import React, { useRef, useEffect, useState } from 'react';
import navbar from '../app/components/Navbar';
import home from '../app/components/Home';
import Section from '../app/components/Section';
import Navbar from '../app/components/Navbar';

const Page = () => {
    const sectionRef = useRef(null);
    const [showSection, setShowSection] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const { y } = sectionRef.current?.getBoundingClientRect() || { y: 0 };
        setShowSection(y <= 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <div>
      <Navbar fixed={showSection} />
      <Section />
      <div className={`py-16 ${showSection ? 'mt-16' : ''}`}> {/* Add appropriate margin when navbar is fixed */}
        This is the popup section!
      </div>
      <div ref={sectionRef} />
      </div>
    );
  };
  
  export default Page;