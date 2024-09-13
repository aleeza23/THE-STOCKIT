import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Modal = ({ show, onClose, children }) => {
    useEffect(() => {
        // Disable body scroll when modal is open
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Clean up the effect when the component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [show]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex bg-black bg-opacity-50">
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.5 }}
                className="relative bg-white pt-5 lg:pt-20 rounded-lg shadow-lg w-full overflow-auto"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 focus:outline-none"
                    style={{ fontSize: '3rem', lineHeight: '1' }} 
                >
                    &times;
                </button>
                {children}
            </motion.div>
        </div>
    );
};

export default Modal;
