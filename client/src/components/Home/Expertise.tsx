import React from 'react';

const Expertise: React.FC = () => {
    return (
        <div className='relative text-2xl py-60px px-4 bg-lightgrey'>
            <h2 className='max-w-xl mx-auto mb-5 flex items-center justify-center h-2px bg-medium'>
                <span className='text-3xl px-5 bg-lightgrey font-medium text-dark'>Expertise</span>
            </h2>
            <div className='absolute inset-0 bg-expert bg-contain bg-no-repeat bg-center opacity-20'></div>
            <div className='relative z-10 max-w-3xl mx-auto text-center leading-10 text-dark'>As a seasoned software engineer, I bring proficiency in designing and developing robust, scalable solutions. My skills encompass Full-Stack Development, Programming Languages including but not limited to JavaScript, C, and C++, Web Technologies, Databases, DevOps Practices, Problem Solving. In addition to technical expertise, my collaborative approach and effective communication skills facilitate seamless teamwork and project success. With a commitment to staying at the forefront of technological advancements, I am dedicated to delivering high-quality software solutions that meet the needs of both users and businesses.</div>
        </div>
    )
};

export default Expertise;