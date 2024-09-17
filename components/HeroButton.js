import React from 'react';
import Link from 'next/link';




const HeroButton = () => (
  <div  
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
  </div>
);

export default HeroButton;
