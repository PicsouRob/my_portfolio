import React from 'react';

import { ServicesData } from '../types';

const ServiceItem: React.FC<ServicesData> = ({
    name, image, text
}) => {
    return (
        <div className='text-white z-30'>
            <div className="relative flex items-center justify-center mx-auto">
                <svg className="overflow-hidden w-28 h-28 md:w-32 md:h-32" viewBox="0 0 72 75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                </svg>
                
                <img src={image} alt={name} className="absolute w-16 h-16 bg-transparent" />
            </div>
            
            <h3 className="mt-8 text-xl lg:text-2xl font-semibold">{name}</h3>
            <p className="mt-4 text-[18px] text-gray-200">{text}</p>
        </div>
    );
}

export default ServiceItem;