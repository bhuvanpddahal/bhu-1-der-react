import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FilePlus, Edit } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';
import { admin } from '../../constants/util';
import { State } from '../../interfaces/store';
import { REMOVE_SELECTED_BLOG } from '../../constants/blog';
import { createBlog, editBlog, getBlogById } from '../../actions/blog';

const BlogForm: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch: any = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const setStates = () => {
        setTitle(selectedBlog?.title || '');
        setDescription(selectedBlog?.description || '');
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = {
            title: title.trim(),
            description: description.trim()
        };
        if(id) dispatch(editBlog(id, formData, navigate));
        else dispatch(createBlog(formData, navigate));
    };

    const { user } = useSelector((state: State) => state.auth);
    const { isLoading, isMiniLoading, selectedBlog } = useSelector((state: State) => state.blog);

    useEffect(() => {
        if(user?.type !== admin) document.title = 'Error | bhu-1-der';
        else if(id) {
            document.title = 'Edit Blog | bhu-1-der';
            dispatch(getBlogById(id || ''));
        }
        else document.title = 'Create Blog | bhu-1-der';
        return () => {
            dispatch({ type: REMOVE_SELECTED_BLOG });
        };
    }, [user]);

    useEffect(() => {
        if(user?.type === admin && id) setStates();
    }, [selectedBlog]);

    if(user?.type !== admin) return <NotFound message='Page not found' />
    if(isLoading) return <Loader />
    if(id && !selectedBlog) return <NotFound message='Blog not found' />

    return (
        <div className='bg-lightgrey min-h-rem flex items-center justify-center pt-3 pb-10 px-3'>
            <motion.form
                onSubmit={handleSubmit}
                className='max-w-2xl w-full shadow-large bg-white rounded-lg px-6 pt-4 pb-6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className='text-lg font-medium text-center text-dark mb-4'>{id ? 'Edit blog' : 'Create a blog'}</h1>
                <div className='mb-3'>
                    <label className='font-medium' htmlFor="title">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none' name='title' id='title' type="text" value={title} required />
                </div>
                <div className='mb-3'>
                    <label className='font-medium' htmlFor="description">Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none resize-none' name="description" id="description" value={description} cols={30} rows={10} required></textarea>
                </div>
                <button className={`w-full py-2 flex items-center justify-center gap-1 bg-primary text-white font-medium rounded-sm transition-bg duration-300 ${isLoading ? 'cursor-not-allowed' : 'hover:bg-primarydark'}`} type="submit" disabled={isLoading}>
                    {id ? (
                        <><Edit size={22} className='inline' /> {isMiniLoading ? 'Editing...' : 'Edit'}</>
                    ) : (
                        <><FilePlus size={22} className='inline' /> {isMiniLoading ? 'Creating...' : 'Create'}</>
                    )}
                </button>
            </motion.form>
        </div>
    )
};

export default BlogForm;