import React from 'react'

import Blog from './Blog';
import NotFound from '../NotFound/NotFound';
import { useSelector } from 'react-redux';
import { State } from '../../interfaces/store';

const Blogs: React.FC = () => {
    const { blogs } = useSelector((state: State) => state.blog);

    if(!blogs?.length) return <NotFound message='No blogs' />

    return (
        <div className='bg-lightgrey min-h-rem flex justify-center pt-3 pb-7 px-3'>
            <div className='max-w-4xl w-full'>
                <h3 className='text-2xl font-medium text-center text-dark mb-4 mt-n10px'>Blogs</h3>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {blogs.map((blog) => (
                        <Blog
                            id={blog?._id?.toString()}
                            title={blog?.title}
                            description={blog?.description}
                            createdAt={blog?.createdAt}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default Blogs;