"use client"
import React from 'react';
import Footer from './Footer';
import Card from '@/constant/Card';
import img01 from '@/public/TMDHosting-1024x1024.webp';
import img02 from '@/public/Untitled-design-3-1024x1024.webp';
import img03 from '@/public/Untitled-design-1024x1024.webp';
import img04 from '@/public/DreamHost-1024x1024.webp';
import img05 from '@/public/shopify-bag5181.logowik.com_.webp';
import img06 from '@/public/Scala-Hosting-1024x1024.webp';
import Image from 'next/image';



const Hoisting = () => {
    const images = [img01, img02, img03, img04, img05, img06];

    return (
        <div>
            <div className="relative px-6 mt-24 mb-10 md:mt-0 mx-auto max-w-5xl text-center">
                <h2 className="block w-full text-black font-bold text-3xl sm:text-4xl">
                    Explore Our Web Hosting Solutions
                </h2>
                <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                    At The Stockit, we offer reliable and high-performance web hosting services to ensure your websites run smoothly and efficiently. Discover our range of hosting plans designed to meet your specific needs.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 p-4 mb-10">
                {images.map((image, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2 ">
                         <Card>
                            <Image
                                src={image}
                                alt="Web Hosting"
                                fill
                                objectFit="cover"
                                className="w-full h-full object-cover"
                                style={{ transformStyle: 'preserve-3d' }}
                            />
                        </Card>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Hoisting;
