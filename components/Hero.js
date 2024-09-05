"use client";
import React from 'react';
import Link from 'next/link';
import { delay, motion } from 'framer-motion';
import HeroText from './HeroText';

const HeroSection = () => {
  // Variants for Hero Text
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

  // Variants for Button
  const buttonVariants = {
    offscreen: {
        opacity: 0,
        scale: 0.8, 
    },
    onscreen: {
        opacity: 1,
        scale: 1, 
        transition: {
            type: 'spring',
            delay : 0.3,
            bounce: 0.4,
            duration: 0.9,
        },
    },
};

  return (
    <div className="flex justify-center items-center dark:bg-slate-800">
      <div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={heroTextVariants}
          className="text-center"
        >
          {/* Hero text */}
          <HeroText />

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.03 }}
            variants={buttonVariants}
            className="mt-12 sm:mt-12 sm:flex sm:justify-center"
          >
            <div className="rounded-md shadow">
              <Link
                href="#contact"
                className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
              >
                Get started 🚀
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
