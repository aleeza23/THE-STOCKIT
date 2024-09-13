import React from "react";
import Link from "next/link";

const CourseText = () => {
    return (
        <>
            <div className='w-full'>
                <h1 className='text-black font-bold text-3xl sm:text-4xl'>
                    Explore Our <span className='text-pink-600'>Courses</span>
                </h1>

                <div className=' mt-5'>

                    <div className='mt-2 text-black'>
                        <span className='font-semibold text-black'>Web Development / SEO / Graphic Design / Blogging</span>
                    </div>
                    Each course is structured to provide intensive learning and practical experience. The duration for each course is <strong>3 weeks, with 4 days of classes each week</strong>.
                </div>

                <div className="mt-4">
                    <h4 className="text-lg font-semibold">Account Details For Registration</h4>
                    <ul className="mt-2 text-gray-700">
                        <li><strong>Account Name:</strong> THESTOCKIT</li>

                        <li><strong>Bank Name:</strong> Bankislami Pakistan Ltd</li>
                        <li><strong>Bank Code:</strong> 38</li>
                        <li><strong>SWIFT CODE:</strong> BKIPPKKA</li>
                        <li><strong>Branch Code:</strong> 3128</li>
                        <li><strong>Branch Name:</strong> Bahria Town CBD PH8 RWP</li>
                        <li><strong>Account No:</strong> 01702495801</li>
                        <li><strong>IBAN:</strong> PK38BKIP0312800027550001</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                        To confirm your <strong>payment</strong>, send the payment screenshot on whatsApp to <strong>+44 7360 506217</strong>.
                    </p>
                </div>

                <div className='mt-5 text-gray-700'>
                    <strong>Course Fees:</strong>
                    <ul className='list-none mt-2'>
                        <li className='flex items-center'>
                            <span className='font-semibold'>Online:</span> <span className='ml-2'>PKR 10,000</span>
                        </li>
                        <li className='flex items-center mt-1'>
                            <span className='font-semibold'>Physical:</span> <span className='ml-2'>PKR 25,000</span>
                        </li>
                    </ul>
                    <p className='mt-2'><strong>Limited seats available!</strong></p>
                </div>

                <div className="mt-8">
                    <Link href="#contact" className="px-6 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full hover:shadow-lg transition">
                        Lets Connect
                    </Link>
                </div>
            </div>

        </>
    );
};

export default CourseText;
