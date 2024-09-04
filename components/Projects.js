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
