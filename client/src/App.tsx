import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Utils/HomePage';
import Footer from './components/Utils/Footer';
import Auth from './components/Auth/Auth';

const App: React.FC = () => {
    return (
        <Router>
            <Fragment>
                <Navbar />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path='/auth' element={<Auth />} />
                </Routes>
                <Footer />
            </Fragment>
        </Router>
    )
};

export default App;
