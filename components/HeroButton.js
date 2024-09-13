import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const buttonVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.8,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      bounce: 0.4,
      duration: 0.5,
    },
  },
};

const HeroButton = () => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0.2 }}
    variants={buttonVariants}
    className="mt-12 sm:mt-12 sm:flex sm:justify-center"
  >
    <div className="rounded-md hidden md:block shadow">
      <Link
        href="#contact"
        className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
      >
        Get started 🚀
      </Link>
    </div>
  </motion.div>
);

export default HeroButton;
