import React, { useState } from 'react';
import { Link } from "react-scroll";

import ToggleMenu from '../components/ToggleMenu';
import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';

const HomeContent: React.FC = () => {
    const [ isShow, setIsShow ] = useState<boolean>(false);
    
    return (
        <div id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-red-30">
            <div className="w-full fixed bg-primary z-20">
                <Header isShow={isShow} setIsShow={setIsShow} />
            </div>
            
            <div className="fixed  top-10 left-0 right-0 overflow-hidden z-20">
                <ToggleMenu isShow={isShow} setIsShow={setIsShow} />
            </div>
            
            <img className="absolute -bottom-2 right-0 transform rotate-180 opacity-50" alt="top-svg" src="./svg/bg-1.svg" />
            
            <div className="relative z-0 mt-20 bg-green-30 h-full">
                <div className="px-8 mx-auto max-w-7xl flex-1 flex items-center">
                    <div className="relative py-16 mx-auto w-full">
                        <div className="flex flex-col lg:flex-row items-center gap-10">
                            <div className="w-full lg:w-1/2 flex lg:block flex-col items-center justify-center text-center lg:text-left">
                                <div className="">
                                    <div className="flex gap-x-4 items-center justify-center lg:justify-start mb-2">
                                        <h1 className="text-gray-300 leading-normal tracking-wide font-medium uppercase">Welcome to my world</h1>
                                        <hr className="h- w-20 bg-gray-300" />
                                    </div>
                                    
                                    <h1 className="text-white text-4xl md:text-6xl font-semibold mb-4 tracking-tighter">I'm Phanord <strong className="text-secondary">Roberto</strong>, a Full stack web developer.</h1>
                                    <span className="pt-2 max-w-lg text-xl tracking-wide leading-relaxed text-white">I am a web developer & programmer living in Santo-Domingo, Dominican Republic. I make web and Cross-platform applications , usually with Reactjs and React native.</span>
                                </div>
                                
                                <Link activeclassname="active"
                                    to="about"
                                    spy={true}
                                    className=""
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <div className="">
                                        <button
                                            className="px-4 my-5 text-primary py-4 tracking-wide bg-white rounded-md shadow-md transition duration-200 font-semibold hover:bg-secondary hover:text-white hover:font-semibold flex items-center gap-x-2 min-w-min">
                                            More About Me
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-4 animate-bounce transition duration-300">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                            </svg>
                                        </button>
                                    </div>
                                </Link>
                                
                                <div className="">
                                    <SocialMedia />
                                </div>
                            </div>
                            
                            <div className="hidden relative w-full lg:w-1/2 lg:flex z-30 items-center justify-center">
                                <img alt="" src="./svg/home.svg" className="z-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeContent;