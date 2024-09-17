// MobileMenu.js
"use client";
import React from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link';

const MobileMenu = ({ isOpen, toggleMenu, handleLinkClick, onOpenModal }) => (
    <motion.nav
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? '100vh' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden bg-white lg:hidden fixed top-0 left-0 w-full"
        aria-label="Main navigation"
    >
        <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-gray-800 text-4xl">
                &times;
            </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 ">
            <li>
                <Link href="/" className="text-lg font-medium text-gray-800 hover:text-blue-500 transition">
                    Home
                </Link>
            </li>
            <li>
                <button
                    onClick={() => handleLinkClick('services')}
                    className="text-lg font-medium text-gray-800 hover:text-blue-500 transition"
                >
                    Services
                </button>
            </li>
            <li>
                <button
                    onClick={() => handleLinkClick('projects')}
                    className="text-lg font-medium text-gray-800 hover:text-blue-500 transition"
                >
                    Projects
                </button>
            </li>

            <li>
                <button
                    onClick={() => handleLinkClick('blogs')}
                    className="text-lg font-medium text-gray-800 hover:text-blue-500 transition"
                >
                    Blogs
                </button>
            </li>

            {/* <li>
                <button
                    onClick={() => onOpenModal(<Hosting />)}
                    className="text-lg font-medium text-gray-800 hover:text-blue-500 transition"
                >
                    Hosting
                </button>
            </li>
            <li>
                <button
                    onClick={() => onOpenModal(<Domain />)}
                    className="text-lg font-medium text-gray-800 hover:text-blue-500 transition"
                >
                    Domain
                </button>
            </li> */}
              <li>
                <Link href="https://thestockit.net/top-4-web-hostings-for-new-publishers-in-2024/" className="text-lg font-medium text-gray-800 hover:text-blue-500 transition">
                   Web Hosting
                </Link>
            </li>
            <li>
                <Link href="https://thestockit.net/domains/" className="text-lg font-medium text-gray-800 hover:text-blue-500 transition">
                    Domains
                </Link>
            </li>
            <li>
                <Link href="/courses" className="text-lg font-medium text-gray-800 hover:text-blue-500 transition">
                    Courses
                </Link>
            </li>
            <li>
                <button
                    onClick={() => handleLinkClick('contact')}
                    className="px-6 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full hover:shadow-lg transition"
                >
                    Lets Connect
                </button>
            </li>
        </ul>
    </motion.nav>
);

export default MobileMenu;
