import React from 'react';
import { useSelector } from 'react-redux';

import NotFound from '../NotFound/NotFound';
import { State } from '../../interfaces/store';
import { admin } from '../../constants/util';

const BlogForm: React.FC = () => {
    const { user } = useSelector((state: State) => state.auth);

    if(user?.type !== admin) return <NotFound />

    return (
        <div className='bg-lightgrey min-h-rem flex items-center justify-center pt-3 pb-10 px-3'>
            <form className='max-w-3xl shadow-large bg-white rounded-lg p-5'>
                <h1 className='text-lg font-medium text-center text-dark mb-4'>Create a blog</h1>
                <div className='mb-3'>
                    <label className='font-medium' htmlFor="title">Title</label>
                    <input className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none' name='title' id='title' type="text" />
                </div>
                <div>
                    <label className='font-medium' htmlFor="description">Description</label>
                    <textarea className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none resize-none' name="description" id="description" cols={30} rows={10}></textarea>
                </div>
            </form>
        </div>
    )
};

export default BlogForm;