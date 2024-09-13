"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import img01 from '@/public/istockphoto-1288965449-612x612.webp';
import Link from 'next/link';

const zoomVariants = {
  initial: { scale: 0.2, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
};

const CourseImg = () => {
  return (
    <div className="lg:w-1/2 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <div className="grid  gap-3">
        <motion.div
          className="aspect-w-1 aspect-h-5"
          variants={zoomVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.4 }}
        >
          <Link href={'https://www.facebook.com/share/V1iw7PPGaX8GjPDD/?mibextid=qi2Omg'} className='shadow-lg w-full h-full bg-gray-100'>
          <div className="">
            <Image width={20} height={20} className="object-contain w-full h-auto mx-auto" loading='lazy' src={img01} alt="img" />
            </div>
          </Link>
        </motion.div>

     
      </div>
    </div>
  );
};

export default CourseImg;
