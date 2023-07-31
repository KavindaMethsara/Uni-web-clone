'use client';
import React, { useRef, useEffect, useState } from 'react';
import navbar from '../app/components/Navbar';
import home from '../app/components/Home';
import Section from '../app/components/Section01';
import Navbar from '../app/components/Navbar';
import Home from '../app/components/Home';
import Section01 from '../app/components/Section01';
import Section02 from './components/Section02';
import Section03 from './components/Section03';
import Section04 from './components/Section04';
import Section05 from './components/Section05';
import Section06 from './components/Section06';
import Section07 from './components/Section07';
import Section08 from './components/Section08';
import Section09 from './components/Section09';

const Page = () => {
  const sectionRef = useRef(null);
  const [showSection, setShowSection] = useState(false);
  const [fitsScreen, setFitsScreen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { y } = sectionRef.current?.getBoundingClientRect() || { y: 0 };
      setShowSection(y <= 0);
    };

    const handleResize = () => {
      setFitsScreen(window.innerHeight >= document.documentElement.scrollHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar fixed={showSection} fitsScreen={fitsScreen} />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Section09 />
      <div ref={sectionRef} />
    </div>
  );
};

export default Page;