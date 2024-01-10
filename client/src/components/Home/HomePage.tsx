import React from 'react';

import HeroPage from './HeroPage';
import About from './About';
import Expertise from './Expertise';

const HomePage: React.FC = () => {
    document.title = 'Introduction | bhu-1-der';
    
    return (
        <>
            <HeroPage />
            <About />
            <Expertise />
        </>
    )
};

export default HomePage;