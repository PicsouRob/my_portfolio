import React from 'react';

import { projectsData } from '../utils/projectsData';
import ProjectItem from '../components/ProjectItem';
import HeaderText from '../components/HeaderText';

const Projects: React.FC = () => {
    return (
        <div
            id="projects"
            className='relative z-0'
        >
            <img
                className="absolute opacity-50 -z-10"
                alt="top-svg"
                src="./svg/bg-1.svg"
            />
            
            <img
                className="absolute bottom-0 right-0 transform rotate-180 opacity-50"
                alt="top-svg"
                src="./svg/bg-1.svg"
            />
            
            <section
                className="py-10 sm:py-16 lg:py-24 text-white"
            >
                <div
                    className="mx-auto px-6 lg:px-8 max-w-7xl z-30"
                >
                    <HeaderText
                        subTitile='Projects'
                        title='My latest projects'
                        text='Each project is a testament to my commitment to innovation, attention to detail, and the ability to transform concepts into impactful and successful outcomes.'
                    />

                    <div
                        className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:grid-cols-3 lg:max-w-full"
                    >
                        {projectsData.map((item, index) => (
                            <ProjectItem
                                key={index}
                                id={item.id}
                                name={item.name}
                                type={item.type}
                                description={item.description}
                                image={item.image}
                                url={item.url}
                                date={item.date}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;