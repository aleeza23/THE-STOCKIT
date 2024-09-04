"use client";

import { motion } from "framer-motion";
import { ServicesData } from "@/Data/ServicesData";
import ServicesCard from "./ServicesCard";

const Services = () => {
    return (
        <motion.section
            id="services"
            className="relative block px-6 py-10 md:py-20 md:px-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="relative mx-auto max-w-5xl text-center">
                <span className="text-black my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                    Why Choose Us
                </span>
                <h2 className="block w-full text-black font-bold text-3xl sm:text-4xl">
                    Elevate Your Business with Stockit
                </h2>
                <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                    Our services are designed to propel your business forward with a focus on results-driven strategies and custom solutions.
                </p>
            </div>

            <div className="relative mx-auto max-w-5xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                {ServicesData.map((elm, i) => (
                    <ServicesCard key={i} elm={elm} index={i} />
                ))}
            </div>
        </motion.section>
    );
};

export default Services;