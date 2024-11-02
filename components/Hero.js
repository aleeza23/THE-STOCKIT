import React from 'react';
import dynamic from 'next/dynamic';
import {  heroTextVariants } from './Client';

// Dynamically import the HeroText component
const HeroText = dynamic(() => import('./HeroText'), {
  ssr: false,
});
const HeroButton = dynamic(() => import('./HeroButton'), {

  ssr: true,
});
const HeroVideo = dynamic(() => import('./HeroVideo'), {

  ssr: true,
});
const Client = dynamic(() => import('./Client').then(mod => mod.Client), { ssr: false });



const HeroSection = () => (
  <div className="relative flex justify-center items-center">
    <div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
      <Client
        animation={heroTextVariants}
        className="text-center"
      >
        <HeroText />
        <HeroButton  />
      </Client>
    </div>
    <HeroVideo />
  </div>
);

export default HeroSection;
