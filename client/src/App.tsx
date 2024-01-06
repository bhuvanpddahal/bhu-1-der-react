import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Home/HomePage';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';
import Blogs from './components/Blog/Blogs';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';
import BlogDetails from './components/Blog/BlogDetails';
import ProjectDetails from './components/Project/ProjectDetails';

const App: React.FC = () => {
    return (
        <Router>
            <Fragment>
                <Navbar />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path='/login' element={<Auth />} />
                    <Route path='/get-started' element={<Auth />} />
                    <Route path='/projects/*'>
                        <Route index element={<Projects />} />
                        <Route path=':id' element={<ProjectDetails />} />
                    </Route>
                    <Route path='/blogs/*'>
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
