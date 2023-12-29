import React, { useState, useEffect } from "react";

import bg1 from './images/bg-1.svg';

import LoadingSpinner from "./components/LoadingSpinner";
import Footer from "./components/Footer";

import HomeContent from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Services";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
            setIsLoading(false);
    }, [isLoading]);

    return (
        <div className="relative scroll-smooth">
            {isLoading ? <LoadingSpinner /> : (
                <div className="relative bg-primary z-30">
                    <img className="absolute top-0 left-0 -z-0 opacity-50" alt="top-svg" src={bg1} />
                    <HomeContent />
                    <About />
                    <Service />
                    <Skills />
                    <Projects />
                    <Contact />
                    <Footer />
                </div>
            )}
        </div>
    );
}

export default App;