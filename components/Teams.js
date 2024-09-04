"use client";
import { teamMembers } from '@/Data/TeamData';
import TeamCard from './TeamCard';


const Teams = () => {
    return (
        <div className="mb-16 mt-10 relative overflow-hidden" id='about'>
            <div className="relative z-10 container flex justify-center mx-auto pt-16">
                <div>
                    <h1 className="xl:text-4xl text-3xl text-gray-800 font-extrabold pb-6 mx-auto">
                        Meet Our Team
                    </h1>
                </div>
            </div>
            <div className="w-full bg-gray-100 px-10 py-10 relative z-10">
                <div className="container mx-auto">
                    <div
                        role="list"
                        aria-label="Behind the scenes People"
                        className="flex flex-wrap justify-around"
                    >
                        {/* Cards */}
                        {teamMembers.map((member, index) => (
                            <TeamCard key={index} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;
