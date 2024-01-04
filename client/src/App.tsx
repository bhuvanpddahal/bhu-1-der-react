import React from 'react';

import Navbar from './components/Navbar/Navbar';
import HeroPage from './components/Utils/HeroPage';
import Footer from './components/Utils/Footer';
import Auth from './components/Auth/Auth';

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <HeroPage />
            <Auth />
            <Footer />
        </>
    )
};

export default App;
