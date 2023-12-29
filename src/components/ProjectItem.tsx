import React from 'react';

import { ProjectsData } from '../types';

const ProjectItem: React.FC<ProjectsData> = ({ 
    id, name, type, description, image, url, date
 }) => {
    return (
        <div key={id} className="overflow-hidden bg-gray-900 rounded z-30">
            <div className="p-5 relative">
                <div className="relative">
                    <div className="block aspect-w-4 aspect-h-3 h-[15rem]">
                        <img className="object-cover bg-cover w-full h-full rounded-md" src={image} alt="" />
                    </div>

                    <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> {type} </span>
                    </div>
                </div>
                
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-200 uppercase"> {date} </span>
                <p className="mt-5 text-2xl font-semibold text-white">{name}</p>
                <p className="mt-4 text-base text-gray-200 flex-1">{description}</p>
                
                <a href={url} target='_blanc' title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-500 transition-all duration-200 border-b-2 border-transparent hover:border-primary focus:border-primary">
                    See this project
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default ProjectItem;