import React from 'react';
import { skillsData } from '../utils/skilsData';
import HeaderText from '../components/HeaderText';

const Skills: React.FC = () => {
    return (
        <div>
            <section className="py-10 bg-gray-900 sm:py-16 lg:py-24 text-white">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <HeaderText subTitile='Skills' title='My Skills' text='My commitment to staying current with industry trends and my passion for continuous learning empower me to deliver innovative solutions and meet the evolving needs of every project.' />
                    
                    <div className="mt-8 lg:mt-16 grid grid-cols-2 text-center sm:grid-cols-2 gap-y-6 lg:grid-cols-5 gap-5 sm:gap-12">
                        {skillsData.map((data, index) => (
                            <div key={index} className='border border-secondary p-3 sm:p-4 rounded-lg bg-primar'>
                                <div className={`${data.color} flex items-center justify-center w-20 h-20 mx-auto rounded-full`}>
                                    <img src={data.logo} alt={data.name} className="h-12 w-12" />
                                </div>
                                
                                <h3 className="mt-4 sm:mt-6 md:mt-8 text-xl lg:text-2xl font-bold">{data.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;