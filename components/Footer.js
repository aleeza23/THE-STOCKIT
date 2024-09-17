import Image from "next/image";
import Link from "next/link";
import logo from '@/public/logo.2eb85d29b6c42e62c4ad.webp'

const Footer = () => {
    return (
        <div className="relative bg-gradient-to-r from-indigo-400 to-pink-600 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <svg
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="white"
                        d="M0,256L1440,160L1440,320L0,320Z"
                        opacity="0.1"
                    />
                </svg>
            </div>
            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                    <div className="md:max-w-md lg:col-span-2">
                        <div className="text-2xl font-bold">
                            <Link href="/">
                                <Image
                                    src={logo}
                                    alt="Agency Logo"
                                    className="h-12 w-auto"
                                    width={100}
                                    height={100}
                                    loading='lazy'
                                />
                            </Link>
                        </div>
                        <div className="mt-4 lg:max-w-sm">
                            <p className="text-sm text-white">
                                At The Stockit, we are dedicated to transforming your digital vision into reality. Our expert team ensures your business stands out in the digital landscape.
                            </p>
                            <p className="mt-4 text-sm text-white">
                                With a commitment to excellence and a passion for innovation, we craft tailored solutions that drive growth and success.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                        <div>
                            <p className="font-semibold tracking-wide text-white">
                                Useful Links
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="#" className="transition-colors cursor-pointer duration-300 text-white hover:text-teal-accent-400">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="transition-colors cursor-pointer duration-300 text-white hover:text-teal-accent-400">
                                        Contact us
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="transition-colors cursor-pointer duration-300 text-white hover:text-teal-accent-400">
                                        About us
                                    </a>
                                </li>
                                <li>
                                    <a href="#blogs" className="transition-colors cursor-pointer duration-300 text-white hover:text-teal-accent-400">
                                        Blogs
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <p className="font-semibold tracking-wide text-white ">
                                Services
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Web Development
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white  hover:text-teal-accent-400"
                                    >
                                        SEO Optimization
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Digital Marketing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Video Editing
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div className="col-span-2">
                            <p className="font-semibold tracking-wide text-white">
                                Contact Us
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li className="transition-colors duration-300 text-white">
                                    10 Haslingden Drive, BD95HR, West Yorkshire, UK
                                </li>
                                <li className="transition-colors duration-300 text-white">
                                    info@stockit.net
                                </li>
                                <li className="transition-colors duration-300 text-white">
                                    +44 7360 506217
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
                    <p className="text-sm text-gray-100">
                        © Copyright 2024 The Stockit. All rights reserved.
                    </p>

                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        <a
                            href="/"
                            className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.1-1.6-3.4-1.6c-2.6,0-4.6,2.1-4.6,4.7c0,0.4,0,0.8,0.1,1.2c-3.8-0.2-7.2-2-9.5-4.7c-0.4,0.7-0.7,1.5-0.7,2.4c0,1.7,0.9,3.2,2.2,4.1c-0.8-0.1-1.6-0.3-2.3-0.7c0,0,0,0.1,0,0.1c0,2.3,1.6,4.2,3.7,4.6c-0.4,0.1-0.9,0.2-1.3,0.2c-0.3,0-0.7,0-1-0.1c0.7,2.2,2.6,3.8,4.9,3.8c-1.8,1.4-4.1,2.3-6.5,2.3c-0.4,0-0.9,0-1.3-0.1C0.7,22,2.9,23,5.4,23c6.5,0,10.1-5.4,10.1-10.1c0-0.2,0-0.3,0-0.5C15.9,10.2,16.6,9.2,17,8c-0.4,0.1-0.8,0.2-1.2,0.3C15.8,8.1,16,7.6,16,7c0-1.2-1-2.2-2.2-2.2c-1.1,0-2.1,0.9-2.2,2c-0.2,0.1-0.4,0.1-0.6,0.1c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-1-0.6-1.5c0-1.2,1-2.2,2.2-2.2c1,0,1.9,0.8,2.2,1.8c0.2-0.2,0.5-0.3,0.8-0.3c0.7,0,1.2,0.6,1.2,1.2c0,0.4-0.1,0.8-0.4,1.1c0.6,0.2,1.2,0.4,1.8,0.4c0.5,0,0.9-0.4,0.9-0.9c0-0.6-0.4-1.1-1.1-1.1c-0.1,0-0.3,0-0.4,0.1c-0.2,0-0.4,0.1-0.5,0.2C14.5,6.8,14.3,6.8,14.2,6.7c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.3-0.1-0.4-0.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.3,0.1,0.6,0.4,0.8c0.3,0.2,0.7,0.3,1.1,0.3c0.5,0,0.9-0.4,0.9-0.9c0-0.6-0.4-1.1-1.1-1.1c-0.1,0-0.3,0-0.4,0.1C14.4,6.6,14.2,6.7,14.2,6.7z" />
                            </svg>
                        </a>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,4.6c-0.8,0.4-1.6,0.6-2.5,0.7c0.9-0.5,1.7-1.3,2.1-2.2c-0.8,0.5-1.7,0.9-2.7,1.1C18.2,3,16.3,2,14.2,2c-4.1,0-7.5,3.4-7.5,7.5c0,0.6,0.1,1.3,0.2,1.9c-6.2-0.3-11.7-3.3-15.4-7.8C0.3,4.7,0,5.4,0,6.1c0,2.6,1.4,4.9,3.4,6.3c-0.6-0.1-1.2-0.2-1.8-0.4c0,0.1,0,0.2,0,0.3c0,3.7,2.6,6.8,6.1,7.5c-0.6,0.2-1.2,0.3-1.8,0.3c-0.4,0-0.8,0-1.2-0.1c0.8,2.4,3,4.1,5.5,4.1c-2.1,1.6-4.7,2.6-7.6,2.6c-0.5,0-1.0,0-1.5-0.1c2.6,1.7,5.6,2.7,8.7,2.7c10.4,0,16.1-8.6,16.1-16.1c0-0.2,0-0.4-0.1-0.6C20.4,6.4,21.3,5.6,22,4.6z" />
                            </svg>
                        </a>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M12,1.5C5.7,1.5,1,6.2,1,12.5S5.7,23.5,12,23.5S23,18.8,23,12.5S18.3,1.5,12,1.5z M12,21.5c-5.3,0-9.5-4.3-9.5-9.5S6.7,2.5,12,2.5S21.5,6.8,21.5,12.5S17.3,21.5,12,21.5z" />
                                <path d="M12,5.7c-3.5,0-6.4,2.9-6.4,6.4s2.9,6.4,6.4,6.4c1.2,0,2.4-0.3,3.4-0.8c0.1-0.1,0.2-0.3,0.2-0.4c0-0.2-0.1-0.3-0.2-0.4c-0.3-0.2-0.5-0.3-0.8-0.3c-1.4,0-2.6-1.2-2.6-2.6s1.2-2.6,2.6-2.6c0.7,0,1.3,0.3,1.7,0.8c0.2,0.2,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.2c0.5-0.6,1.2-1.1,1.9-1.5c0.1-0.1,0.2-0.3,0.2-0.4c0-0.2-0.1-0.3-0.2-0.4C14.2,5.8,13.2,5.7,12,5.7z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
