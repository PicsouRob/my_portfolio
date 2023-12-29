import React from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialMedia: React.FC = () => {
    return (
        <div>
            <SocialIcon
                bgColor="transparent"
                fgColor="#fff"
                url="https://x.com/PicsouRoberto"
            />
            
            <SocialIcon
                bgColor="transparent"
                fgColor="#fff"
                url="https://facebook.com/roberto.phanord"
            />
            
            <SocialIcon bgColor="transparent" fgColor="#fff" url="https://instagram.com/iampicsou" />
            
            <SocialIcon
                bgColor="transparent"
                fgColor="#fff"
                url="https://linkedin.com/in/phanord-picsou-roberto-1b99b8221"
            />
            
            <SocialIcon
                bgColor="transparent"
                fgColor="#fff"
                url="https://www.behance.net/wwwphanordb085"
            />
            
            <SocialIcon
                bgColor="transparent"
                fgColor="#fff"
                url="https://dribbble.com/Phanord"
            />
        </div>
    );
}

export default SocialMedia;