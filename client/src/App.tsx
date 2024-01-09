import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import AlertBox from './components/Alert/AlertBox';
import HomePage from './components/Home/HomePage';
import Navbar from './components/Navbar/Navbar';
import Admin from './components/Admin/Admin';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';
import Blogs from './components/Blog/Blogs';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';
import BlogDetails from './components/Blog/BlogDetails/BlogDetails';
import BlogForm from './components/Blog/BlogForm';
import ProjectDetails from './components/Project/ProjectDetails';
import ProjectForm from './components/Project/ProjectForm';

const App: React.FC = () => {
    return (
        <Router>
            <Fragment>
                <AlertBox />
                <Navbar />
                <Routes>
                    <Route index element={<Navigate to='/introduction' replace />} />
                    <Route path='/introduction' element={<HomePage />} />
                    <Route path='/login' element={<Auth />} />
                    <Route path='/get-started' element={<Auth />} />
                    <Route path='/admin/*'>
                        <Route index element={<Admin />} />
                    </Route>
                    <Route path='/projects/*'>
                        <Route index element={<Projects />} />
                        <Route path=':id' element={<ProjectDetails />} />
                        <Route path='add' element={<ProjectForm />} />
                        <Route path='edit/:id' element={<ProjectForm />} />
                    </Route>
                    <Route path='/blogs/*'>
                        <Route index element={<Blogs />} />
                        <Route path=':id' element={<BlogDetails />} />
                        <Route path='create' element={<BlogForm />} />
                        <Route path='edit/:id' element={<BlogForm />} />
                    </Route>
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </Fragment>
        </Router>
    )
};

export default App;
