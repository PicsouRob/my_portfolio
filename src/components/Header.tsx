import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";

import logo from "../images/logo.jpeg";
import { DispatchProps } from '../types';

const Header: React.FC<DispatchProps> = ({ isShow, setIsShow }) => {
    const toggleIcon = () => {
        setIsShow(!isShow);
    }

    return (
        <div className="py-3 overflow-hidden z-60 relative">
            <div className="mx-auto">
                <div className="max-w-7xl px-8 mx-auto flex items-center justify-between">
                    <Link
                        activeclassName="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <div className="flex text-2xl md:text-3xl font-bold cursor-pointer gap-x- items-center">
                            <img alt="" src={logo} 
                                style={{
                                    mixBlendMode: "color-burn",
                                }}
                                className="w-auto mix-blend-normal h-8"
                            />
                        </div>
                    </Link>
                    
                    <div className="hidden md:items-center md:tracking-wide text-white md:gap-8 lg:gap-x-16 md:flex font-medium text-lg">
                        <div className="cursor-pointer ">
                            <Link activeclassName="active"
                                to="home"
                                spy={true}
                                className=""
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeclassNameName="selected"
                            >Home</Link>
                        </div>
                        
                        <div className="cursor-pointer ">
                            <Link activeclassName="active"
                                to="about"
                                spy={true}
                                className=""
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeclassNameName="selected"
                            >About Me</Link>
                        </div>
                        
                        <div className="cursor-pointer ">
                            <Link activeclassName="active"
                                to="services"
                                spy={true}
                                className=""
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeclassNameName="selected"
                            >Services</Link>
                        </div>
                        
                    </div>
                        <Link activeclassName="active"
                            to="contact"
                            spy={true}
                            className="py-2
                             px-5 bg-white text-primary font-semibold text-base rounded-sm transition-all duration-200 hover:bg-secondary hover:text-white cursor-pointer"
                            smooth={true}
                            offset={-70}
                            duration={500}
                    >Contact</Link>
                    
                    <div className="flex md:hidden" onClick={() => toggleIcon()}>
                        {!isShow ? (
                            <FaBars color="#fff"
                                size={20} style={{ cursor: "pointer" }}
                            />
                        ) : (
                            <FaTimes color="#fff"
                                size={20} style={{ cursor: "pointer" }}
                            />
                        )}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header;