import React from 'react';

import { HeaderTextProps } from '../types';

const HeaderText: React.FC<HeaderTextProps> = ({
    title, text, subTitile
}) => {
    return (
        <div className="mb-16 w-full flex flex-col items-center justify-center">
            <h3 className="text-[#880a0c] text-xl font-bold">
                {subTitile}
            </h3>
            
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">
                {title}
            </h1>
            
            <p className="pt-2 max-w-2xl font-medium tracking-wide leading-relaxed text-center">
                {text}
            </p>
        </div>
    );
}

export default HeaderText;