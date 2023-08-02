'use client';
import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../app/components/Navbar'; // Check the relative path
import Home from '../app/components/Home'; // Check the relative path
import Section01 from '../app/components/Section01'; // Check the relative path
import Section02 from '../app/components/Section02'; // Check the relative path
import Section03 from '../app/components/Section03'; // Check the relative path
import Section04 from '../app/components/Section04'; // Check the relative path
import Section05 from '../app/components/Section05'; // Check the relative path
import Section06 from '../app/components/Section06'; // Check the relative path
import Section07 from '../app/components/Section07'; // Check the relative path
import Section08 from '../app/components/Section08'; // Check the relative path
import Section09 from '../app/components/Section09'; // Check the relative path
import Section10 from './components/Section10';
import Section11 from './components/Section11';

const Page = () => {
  return (
    <div>
      <Navbar />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Section09 />
      <Section10 />
      <Section11 />
      <div/>
    </div>
  );
};

export default Page;
