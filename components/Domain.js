"use client";
import React from 'react';
import Footer from './Footer';
import Card from '@/constant/Card';
import img01 from '@/public/Untitled-design-1024x1024.webp';
import img02 from '@/public/Untitled-design-2-1024x1024.webp';
import img03 from '@/public/Untitled-design-1-1024x1024.webp';
import Image from 'next/image';

const Domain = () => {
    const cardsData = [
        { image: img01, text: "Save Big With Promo Code Given Below", buttonText: "Save15" },
        { image: img02, text: "Save Big With Promo Code Given Below", buttonText: "Nameboy" },
        { image: img03, text: "Save Big With Promo Code Given Below", buttonText: "NEWCOM598" },
    ];

    return (
        <div className=''>
            <div className="relative px-6 mt-24 mb-10 md:mt-0 mx-auto max-w-5xl text-center">
                <h2 className="block w-full text-black font-bold text-3xl sm:text-4xl">
                    Our Domain Partners
                </h2>
                <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                    At The Stockit, find your dream domain with the most affordable prices with our partner domain registrars.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 p-4 mb-10">
                {cardsData.map((card, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
                        <Card>
                            <Image
                                src={card.image}
                                alt="Domain Partner"
                                fill
                                objectFit="contain"
                                className="w-full h-full object-contain"
                                style={{ transformStyle: 'preserve-3d' }}
                            />

                        </Card>
                        <div className="text-center mt-4">
                            <strong className="block mb-2">{card.text}</strong>
                            <button className="px-4 py-1 w-full bg-gradient-to-r from-indigo-400 to-pink-600 text-white font-bold rounded-full">
                                {card.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Domain;
