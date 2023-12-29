import React from 'react';
import { Link } from 'react-scroll';

import SocialMedia from './SocialMedia';
import { DispatchProps } from '../types';

const ToggleMenu: React.FC<DispatchProps> = ({ isShow, setIsShow }) => {
    const toggleIcon = () => {
        setIsShow(!isShow);
    }
    
    return (
        <div className={`${isShow ? "-translate-x-0" : "absolute right-0 translate-x-full"} h-2/5 bg-primary py-8 z-40 mt-4 w-full transition transform ease-out duration-300 inline-block md:hidden overflow-hidden`}>
            <div
                className="grid grid-cols-1 divide-y text-center text-white text-xl font-medium"
            >
                <div className="cursor-pointer py-3">
                    <Link
                        activeclassName="active"
                        to="home"
                        className=""
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => {
                            toggleIcon();
                        }}
                    >
                        Home
                    </Link>
                </div>
                
                <div className="cursor-pointer py-3">
                    <Link
                        activeclassName="active"
                        to="about"
                        className=""
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => toggleIcon()}
                    >
                        About Me
                    </Link>
                </div>
                
                <div className="cursor-pointer py-3">
                    <Link
                        activeclassName="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        className=""
                        offset={-70}
                        duration={500}
                        onClick={() => toggleIcon()}
                    >
                        Services
                    </Link>
                </div>
                
                <div className="cursor-pointer py-3">
                    <Link
                        activeclassName="active"
                        to="contact"
                        spy={true}
                        className=""
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => toggleIcon()}
                    >
                        Contact
                    </Link>
                </div>
            </div>
            
            <div className="mt-16 flex items-center justify-center">
                <SocialMedia />
            </div>
        </div>
    );
}

export default ToggleMenu;