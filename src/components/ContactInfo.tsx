import React from 'react';
import { ContactInfoProps } from '../types';

const ContactInfo: React.FC<ContactInfoProps> = ({
    caption, text, children, handleClick
}) => {
    return (
        <div className="flex items-start text-white cursor-pointer"
            onClick={() => handleClick()}
        >
            {children}
            
            <div className="ml-6">
                <p className="text-base font-medium">{caption}</p>
                <p className="mt-4 text-xl font-medium text-gray-200 text-wrap">{text}</p>
            </div>
        </div>
    );
}

export default ContactInfo;