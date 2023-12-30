import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen absolute inset-0">
            <img className="animate-spin w-10 h-10 bg-white -z-30" alt="" src="./svg/spin.svg" />
        </div>
    );
};

export default LoadingSpinner;