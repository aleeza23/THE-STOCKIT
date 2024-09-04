import React from 'react'
import Image from "next/image";

const ProjectCard = ({ image, index }) => {
    return (
        <li key={index} className="relative group">
            <Image
                src={image.src}
                alt={`Project ${index + 1}`}
                width={400}
                height={500}
                style={{
                    boxShadow: '0px 2px 70px 0px rgba(110, 130, 208, 0.18)',
                }}
                className="object-cover rounded-lg  transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-[0_6px_20px_rgba(244,114,182,0.5)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                <p className="text-sm text-gray-300">{image.description}</p>
                <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-400 to-pink-600 rounded-lg"
                >
                    View Live
                </a>
            </div>
        </li>
    )
}

export default ProjectCard
