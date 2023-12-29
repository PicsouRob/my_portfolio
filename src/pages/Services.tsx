import React from 'react';

import bg1 from '../images/bg-1.svg';
import { servicesData } from '../utils/servicesData';
import ServiceItem from '../components/ServiceItem';
import HeaderText from '../components/HeaderText';

const Service: React.FC = () => {
    return (
        <div id="services" className="relative">
            <img className="absolute opacity-50" alt="top-svg" src={bg1} />
            <img className="absolute bottom-0 right-0 transform rotate-180 opacity-50" alt="top-svg" src={bg1} />
            
            <div className="px-8 max-w-7xl mx-auto text-white py-10 sm:py-16 lg:py-24">
                <HeaderText
                    subTitile='Services'
                    title='My Awasome Services'
                    text='You may be interested in what i can offer you. More services you can find below.I do everything at a high level.'
                />
                
                <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
                    {servicesData.map((item, index) => (
                        <ServiceItem
                            key={index}
                            name={item.name}
                            text={item.text}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;