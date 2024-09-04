"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '@/public/logo.2eb85d29b6c42e62c4ad.webp'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="relative  bg-v flex justify-between items-center px-6 bg-transparent z-20 w-full">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image
              src={logo}
              alt="Agency Logo"
              className="h-12 w-auto"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center items-center">
          <div className="rounded-full  border-2 border-gradient mt-1 p-1 px-7">
            <ul className="flex space-x-8 text-lg ">
              <li>
                <Link href="#home" className="hover:text-blue-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-500 transition">
                  Services
                </Link>
              </li>             
              <li>
                <Link href="#projects" className="hover:text-blue-500 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Let's Connect Button for Desktop */}
        <div className="hidden md:block">
          <Link href="#contact" className="px-6 py-2  bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full hover:shadow-lg transition">
            Lets Connect
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <motion.div
              animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
              className="w-6 h-0.5 bg-gray-800 mb-1"
            ></motion.div>
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-gray-800 mb-1"
            ></motion.div>
            <motion.div
              animate={isOpen ? { rotate: -45 } : { rotate: 0 }}
              className="w-6 h-0.5 bg-gray-800"
            ></motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? '100vh' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden bg-white md:hidden fixed top-0 left-0 w-full"
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-gray-800 text-4xl">
              &times;
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-6 mt-20">
            <li>
              <Link href="#home" className="text-lg font-medium text-gray-800 hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-lg font-medium text-gray-800 hover:text-blue-500 transition">
                Services
              </Link>
            </li>            
            <li>
              <Link href="#projects" className="text-lg font-medium text-gray-800 hover:text-blue-500 transition">
                Projects
              </Link>
            </li>
            <li>
                <Link href="#about" className="hover:text-blue-500 transition">
                  About
                </Link>
              </li>
            <li>
                <Link href="#about" className="hover:text-blue-500 transition">
                  Contact
                </Link>
              </li>
            <li>
              <Link href="#contact" className="px-6 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full hover:shadow-lg transition">
                Lets Connect
              </Link>
            </li>
          </ul>
        </motion.nav>
      </header>
    </>
  );
};

export default Header;
