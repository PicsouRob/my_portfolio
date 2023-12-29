import React from 'react';

import SocialMedia from './SocialMedia';

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-2 text-white py-6 bg-primary">
            <SocialMedia />
            
            <span>Copyright © 2023 - All Rights Reserved</span>
            <span>Powered by Phanord Roberto</span>
        </div>
    )
}

export default Footer;