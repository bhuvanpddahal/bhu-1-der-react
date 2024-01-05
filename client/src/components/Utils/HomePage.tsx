import React from 'react';

import HeroPage from './HeroPage';
import Loader from './Loader';

const HomePage: React.FC = () => {
    return (
        <>
            <HeroPage />
            <Loader />
        </>
    )
};

export default HomePage;