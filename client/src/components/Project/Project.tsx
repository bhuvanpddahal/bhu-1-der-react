import React from 'react';
import { Link } from 'react-router-dom';

import { ProjectProp } from '../../interfaces/project';

const Project: React.FC<ProjectProp> = ({
    id,
    title,
    image,
    description,
    addedAt
}: ProjectProp) => {
    return (
        <li className='bg-white px-7 pt-7 pb-8 rounded-xl shadow-large'>
            <img className='w-full h-200px object-cover mb-3 rounded-md' src={image} alt="" />
            <h2 className='font-semibold text-lg text-dark line-clamp-2'>{title}</h2>
            <p className='text-normal mt-2 mb-6 line-clamp-3'>{description}</p>
            <Link className='px-4 py-2 bg-primary text-white rounded-sm transition-bg duration-300 hover:bg-primarydark' to={`/projects/${id}`}>See more</Link>
        </li>
    )
};

export default Project;