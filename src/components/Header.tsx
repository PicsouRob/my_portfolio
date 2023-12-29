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
        <div className="py-3 overflow-hidden z- relative">
            <div className="mx-auto">
                <div className="max-w-7xl px-8 mx-auto flex items-center justify-between">
                    <Link
                        activeclassname="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <div className="flex text-2xl md:text-3xl font-bold cursor-pointer gap-x- items-center z-30">
                            <img
                                alt=""
                                src={logo}
                                className="w-auto mix-blend-normal h-8 z-40"
                            />
                        </div>
                    </Link>
                    
                    <div className="hidden md:items-center md:tracking-wide text-white md:gap-8 lg:gap-x-16 md:flex font-medium text-base">
                        <div className="cursor-pointer ">
                            <Link activeclassname="active"
                                to="home"
                                spy={true}
                                className=""
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Home</Link>
                        </div>
                        
                        <div className="cursor-pointer ">
                            <Link activeclassname="active"
                                to="about"
                                spy={true}
                                className=""
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >About Me</Link>
                        </div>
                        
                        <div className="cursor-pointer ">
                            <Link activeclassname="active"
                                to="services"
                                spy={true}
                                className=""
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Services</Link>
                        </div>
                        
                        <div className="cursor-pointer ">
                            <Link activeclassname="active"
                                to="skills"
                                spy={true}
                                className=""
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Skills</Link>
                        </div>
                        
                        <div className="cursor-pointer ">
                            <Link activeclassname="active"
                                to="projects"
                                spy={true}
                                className=""
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Projects</Link>
                        </div>
                    </div>
                    
                    <Link activeclassname="active"
                        to="contact"
                        spy={true}
                        className="hidden md:flex py-2
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
    );
}

export default Header;