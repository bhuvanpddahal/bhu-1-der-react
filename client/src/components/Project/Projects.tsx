import React from 'react';

import Project from './Project';

const Projects: React.FC = () => {
    return (
        <div className='bg-lightgrey min-h-rem flex justify-center pt-3 pb-7 px-3'>
            <div className='max-w-4xl w-full'>
                <h3 className='text-2xl font-medium text-center text-dark mb-4 mt-n10px'>Projects</h3>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <Project />
                    <Project />
                    <Project />
                </ul>
            </div>
        </div>
    )
};

export default Projects;