import React from 'react';
import { motion } from 'framer-motion';

const Expertise: React.FC = () => {
    return (
        <motion.div
            className='relative text-lg sm:text-xl md:text-2xl py-60px px-4 bg-lightgrey'
            initial={{ translateY: '-100%', opacity: 0 }}
            whileInView={{ translateY: '0%', opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className='max-w-xl mx-auto mb-5 flex items-center justify-center h-2px bg-medium'>
                <span className='text-xl sm:text-2xl md:text-3xl px-5 bg-lightgrey font-medium text-dark'>Expertise</span>
            </h2>
            <div className='absolute inset-0 bg-expert bg-contain bg-no-repeat bg-center opacity-20'></div>
            <div className='relative z-10 max-w-3xl mx-auto text-center leading-8 md:leading-10 text-dark'>A software engineer bringing proficiency in designing and developing robust, scalable solutions. My skills encompass Full-Stack Development, Programming Languages including but not limited to JavaScript, Web Technologies, Databases, DevOps Practices, Problem Solving. In addition to technical expertise, my collaborative approach and effective communication skills facilitate seamless teamwork and project success. With a commitment to staying at the forefront of technological advancements, I am dedicated to delivering high-quality software solutions that meet the needs of both users and businesses.</div>
        </motion.div>
    )
};

export default Expertise;