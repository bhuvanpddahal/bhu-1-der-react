import React from 'react';
import { Clock } from 'react-feather';
import { Link } from 'react-router-dom';

import { BlogProp } from '../../interfaces/blog';

const Blog: React.FC<BlogProp> = ({
    id,
    title,
    description,
    createdAt
}: BlogProp) => {
    return (
        <li className='bg-white px-7 pt-5 pb-7 rounded-xl shadow-large'>
            <h2 className='font-semibold text-lg text-dark line-clamp-2 mb-2'>{title}</h2>
            <p className='text-darkgrey flex items-center justify-end gap-1'>
                <Clock size={20} className='inline' />
                <span className='text-sm'>{createdAt}</span>
            </p>
            <p className='text-normal mt-2 mb-6 line-clamp-5'>{description}</p>
            <Link className='px-4 py-2 bg-primary text-white rounded-sm transition-bg duration-300 hover:bg-primarydark' to={`/blogs/${id}`}>Read more</Link>
        </li>
    )
};

export default Blog;