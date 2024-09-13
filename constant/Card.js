import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Card = ({ link, children }) => {
    return (
        <Link href={'#'} passHref>
            <motion.div

                className="relative w-full h-64 cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden"
                whileHover={{ rotateY: 10, rotateX: 10, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                    perspective: 1000,
                    boxShadow: '0px 2px 70px 0px rgba(110, 130, 208, 0.18)',
                }}
            >
                {children}
            </motion.div>
        </Link>
    );
};

export default Card;
