import FigmaIcon from '../assets/icons/figma.tsx';


import React from 'react';
import WebIcon from '../assets/icons/web.tsx';
import GitHubIcon from '../assets/icons/github.tsx';

interface ProjectDetailsProps {
    title: string;
    subtitle: string;
    description: string;
    categories: string[];
    team: string[];
    year: string;
    technologies: string[];
    img: string;
    github?: string;
    website?: string;
    figma?: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ title, subtitle, description, categories, team, year, technologies, img, github, website, figma }) => {
    return (
        <div className="mt-12 w-full justify-center bg-amber-50 ">
            <div className="max-w-6xl gap-8 items-center flex flex-col lg:flex-row mx-auto lg:py-0 py-12">
                <div className='lg:py-12 px-8 lg:px-0'>
                    <h1 className="text-7xl font-[Josefin_sans] mb-2">{title}</h1>
                    <p className="text-2xl text-gray-500 font-[IBM_Plex_Serif] italic mb-4">{subtitle}</p>
                    <p className="max-w-4xl text-md text-gray-600">
                    {description}
                    </p>
                    <div className="grid grid-cols-[6rem_1fr] gap-2 mt-4">
                        <p className='font-[Josefin_sans] text-lg'>Category</p><div>{categories.map((cat, index) => <p key={index}>{cat}</p>)}</div>
                        <p className='font-[Josefin_sans] text-lg'>Team</p><div>{team.map((member, index) => <p key={index}>{member}</p>)}</div>
                        <p className='font-[Josefin_sans] text-lg'>Year</p><p>{year}</p>
                    </div>
                    <div className='flex mt-4 gap-4 flex-wrap'>
                        {technologies.map((tech, index) => (
                            <p key={index} className='border-1 px-4 py-1 rounded-2xl border-[#5D5627] text-[#5D5627] hover:bg-[#5D5627] hover:text-white hover:animate-bounce transition-all duration-300'>{tech}</p>
                        ))}
                    </div>
                    <div className='flex flex-row gap-4 align-center mt-4'>
                        {github && <a href={github} className="hover:bg-[#e1d3abff] p-2 rounded-full"><GitHubIcon size={32} color='#333'/></a>}
                        {website && <a href={website} className="hover:bg-[#e1d3abff] p-2 rounded-full"><WebIcon size={32} color='#333'/></a>}
                        {figma && <a href={figma} className="hover:bg-[#e1d3abff] p-2 rounded-full"><FigmaIcon size={32} color='#333'/></a>}
                    </div>
                </div>
                <img src={img} alt="Mockup" className="lg:max-w-120 object-cover h-170" />
            </div>
        </div>
    );
}

export default ProjectDetails;