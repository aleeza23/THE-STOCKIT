"use client";
import { useEffect, useRef } from "react";
import { images } from "@/Data/ProjectData";
import ProjectCard from "./ProjectCard";

const Projects = () => {


    const logosRef = useRef(null);

    useEffect(() => {
        const ul = logosRef.current;
        if (ul) {
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        }
    }, []);

    return (
        <div className="relative font-inter antialiased" id="projects">
            <div className="relative mx-auto max-w-5xl mb-12 text-center">              
                <h2 className="block w-full text-black font-bold text-3xl sm:text-4xl">
                    Discover Our Impactful Work
                </h2>
                <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                    At The Stockit, we take pride in our diverse portfolio of projects that demonstrate our commitment to delivering exceptional digital solutions.
                </p>
            </div>

            <main className="relative flex flex-col justify-center overflow-hidden">
                <div className="w-full mx-auto px-4 md:px-6 ">
                    <div className="text-center">

                        {/* Logo Carousel animation */}
                        <div
                            className="w-full inline-flex flex-nowrap overflow-hidden"
                        >
                            <ul ref={logosRef} className="flex items-center justify-center gap-4 [&_img]:max-w-none animate-infinite-scroll">
                                {images.map((image, index) => (
                                    <ProjectCard key={index} index={index} image={image} />
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Projects;
