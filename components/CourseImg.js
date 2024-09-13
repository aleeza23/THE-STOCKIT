"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import img01 from '@/public/How-to-create-an-online-course.jpg.webp';

const zoomVariants = {
  initial: { scale: 0.2, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
};

const CourseImg = () => {
  return (
    <div className="lg:w-1/2 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <div className="grid gap-3">
        <motion.div
          className="relative"
          variants={zoomVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.4 }}
        >
          <Image
            src={img01}
            alt="Course Image"           
            width={1200} 
            height={800} 
            className="object-contain"
            loading='lazy'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CourseImg;
