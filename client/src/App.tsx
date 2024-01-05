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
import Blogs from './components/Blog/Blogs';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';
import BlogDetails from './components/Blog/BlogDetails';

const App: React.FC = () => {
    return (
        <Router>
            <Fragment>
                <Navbar />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path='/auth' element={<Auth />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/blog/*'>
                        <Route index element={<Blogs />} />
                        <Route path=':id' element={<BlogDetails />} />
                    </Route>
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </Fragment>
        </Router>
    )
};

export default App;
