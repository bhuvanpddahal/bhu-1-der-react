import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <motion.div
            className='relative text-lg sm:text-xl md:text-2xl py-60px px-4'
            initial={{ translateY: '-100%', opacity: 0 }}
            whileInView={{ translateY: '0%', opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className='max-w-xl mx-auto mb-5 flex items-center justify-center h-2px bg-medium'>
                <span className='text-lg sm:text-2xl md:text-3xl px-5 bg-white font-medium text-dark'>About</span>
            </h2>
            <div className='absolute inset-0 bg-about bg-contain bg-no-repeat bg-center opacity-20'></div>
            <div className='relative z-10 max-w-3xl mx-auto text-center leading-8 md:leading-10 text-dark'>Passionate and innovative software engineer with a keen eye for creative solutions. With a solid foundation in coding and a love for problem-solving, I thrive in crafting elegant and efficient software solutions. My journey in the tech world is fueled by a relentless pursuit of knowledge and a commitment to delivering high-quality results. From conceptualizing ideas to bringing them to life through code, I bring a unique blend of technical expertise and creative flair to every project. Let's embark on a journey to transform ideas into reality through the power of code and imagination.</div>
        </motion.div>
    )
};

export default About;