import React, { useState } from 'react';
import { FilePlus } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import NotFound from '../NotFound/NotFound';
import { admin } from '../../constants/util';
import { State } from '../../interfaces/store';
import { createBlog } from '../../actions/blog';

const BlogForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch: any = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const isLoading = false;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = {
            title,
            description
        };
        dispatch(createBlog(formData, navigate));
    };

    const { user } = useSelector((state: State) => state.auth);
    if(user?.type !== admin) return <NotFound message='Page not found' />

    return (
        <div className='bg-lightgrey min-h-rem flex items-center justify-center pt-3 pb-10 px-3'>
            <form onSubmit={handleSubmit} className='max-w-2xl w-full shadow-large bg-white rounded-lg p-5'>
                <h1 className='text-lg font-medium text-center text-dark mb-4'>Create a blog</h1>
                <div className='mb-3'>
                    <label className='font-medium' htmlFor="title">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none' name='title' id='title' type="text" value={title} />
                </div>
                <div className='mb-3'>
                    <label className='font-medium' htmlFor="description">Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none resize-none' name="description" id="description" value={description} cols={30} rows={10}></textarea>
                </div>
                <button className={`w-full py-2 flex items-center justify-center gap-1 bg-primary text-white font-medium rounded-sm transition-bg duration-300 ${isLoading ? 'cursor-not-allowed' : 'hover:bg-primarydark'}`} type="submit" disabled={isLoading}>
                    <FilePlus size={22} className='inline' /> {isLoading ? 'Creating...' : 'Create'}
                </button>
            </form>
        </div>
    )
};

export default BlogForm;