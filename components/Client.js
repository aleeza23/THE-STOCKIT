"use client";
import React from 'react';
import { motion } from 'framer-motion';

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


const Client = ({ children, animation, }) => {
    return (
        <motion.div variants={animation} initial="hidden" animate="visible" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {children}
        </motion.div>
    );
};

export { Client, heroTextVariants };
