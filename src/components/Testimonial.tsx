import React from 'react';

import Stars from './Stars';

const Testimonial: React.FC = () => {
    return (
        <div className="">
            <Stars />

            <blockquote className="mt-6">
                <p className="text-lg leading-relaxed text-white">You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.</p>
            </blockquote>

            <div className="flex items-center mt-8">
                <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg" alt="" />
                
                <div className="ml-4">
                    <p className="text-base font-semibold text-white">Exantus Jefferson</p>
                    <p className="mt-px text-sm text-gray-400">Client</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;