"use client";
import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import the HeroText component
const HeroText = dynamic(() => import('./HeroText'), { 
  ssr: true,
});
const HeroButton = dynamic(() => import('./HeroButton'), {

  ssr: true,
});
const HeroVideo = dynamic(() => import('./HeroVideo'), {
 
  ssr: true,
});

const heroTextVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      bounce: 0.4,
      duration: 0.3,
    },
  },
};

const HeroSection = () => (
  <div className="relative flex justify-center items-center dark:bg-slate-800">
    <div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={heroTextVariants}
        className="text-center"
      >
        <HeroText />
        <HeroButton />
      </motion.div>
    </div>
    <HeroVideo />
  </div>
);

export default HeroSection;
