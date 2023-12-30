import React from 'react';
import { Link } from "react-scroll";

import HeaderText from '../components/HeaderText';
import SocialMedia from '../components/SocialMedia';

const About: React.FC = () => {
    return (
        <div id="about" className="relative w-full bg-gray-900 -z-10">
            <div className="max-w-7xl py-16 px-8 mx-auto">
                <HeaderText
                    subTitile='About'
                    title='About Me'
                    text=''
                />
                
                <div className="flex flex-col lg:flex-row gap-16 items-center mx-auto">
                    <div className="relative w-full lg:w-1/2">
                        <div className="absolute -top-2 left-0 -z-10 w-52 h-52 rounded-lg bg-[#880a0c]"></div>
                        <img
                            className="rounded-lg z-20 translate-x-3"
                            src="./images/picsou.jpg"
                            alt='about'
                        />
                    </div>
                    
                    <div className="w-full lg:w-1/2">
                        <div className="text-white">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl z-30">
                                    Phanord Roberto
                                </h1>
                                <p className="pt-2 max-w-2xl font-medium tracking-wide leading-relaxed z-30">
                                    WEB DEVELOPER - DESIGNER
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-green-400" />
                                    <p className="">Available for work</p>
                                </div>
                                <SocialMedia />
                            </div>
                            
                            <p className="md:text-lg leading-relaxed font-medium mt-5">
                                Hi, I am a Web Developer, programmer & User Interface Designer living in Santo-Domingo, Dominican Republic. I make web and Cross-platform applications , usually with Reactjs and React native.<br /><br /> I'm an Avid follower of technology and a developer by trade. I love learning new languages and always looking for something new to challenge myself. Since moving into full time developement, I have worked with Javascript , React and Node. I love building simple user interfaces that are beautiful to look at.
                            </p>
                            
                            <div className="mt-8">
                                <Link activeclassname="active"
                                    to="contact"
                                    spy={true}
                                    className="py-3 px-5 bg-white text-primary font-semibold text-base rounded-sm transition-all duration-200 hover:bg-secondary hover:text-white cursor-pointer"
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Get in touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;