'use client'
import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosAnimation = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // You can customize the animation duration
            once: false, // Whether animation should happen only once - while scrolling down
        });
    }, []);
    return (
        <>{children}</>
    )
}

export default AosAnimation