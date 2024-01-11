import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, GitHub } from 'react-feather';

import HeroImg from '../../images/assets/hero.avif';

const HeroPage: React.FC = () => {
    return (
        <motion.div
            className='flex items-center gap-5 px-10p pt-2 pb-10 overflow-hidden'
            initial={{ backgroundColor: '#fff' }}
            whileInView={{ backgroundColor: '#eee' }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            <div className='w-full'>
                <motion.h3
                    className='text-4xl leading-50px text-dark font-light'
                    initial={{ opacity: 0, translateX: '-100%' }}
                    whileInView={{ opacity: 1, translateX: '0%' }}
                    transition={{ duration: 1 }}
                >
                    Hello, I'm <span className='text-primarydark'>Bhuvan Prasad Dahal</span> from Nepal.
                </motion.h3>
                <motion.div
                    className='flex items-center gap-3 flex-wrap mt-4'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <Link to='/get-started' className='px-9 py-4 bg-white rounded-sm shadow-sm transition-bg duration-300 hover:bg-dim'>
                        <Play color='#333' className='inline' /> Get Started
                    </Link>
                    <Link to='https://www.github.com/BhuvanPdDahal' className='px-9 py-4 bg-white rounded-sm shadow-sm transition-bg duration-300 hover:bg-dim' target='_blank'>
                        <GitHub color='#333' className='inline' /> GitHub Account
                    </Link>
                </motion.div>
            </div>
            <motion.img 
                className='shrink h-300px lg:h-380px hidden md:inline-block rounded-lg'
                src={HeroImg}
                alt="img"
                initial={{ opacity: 0, translateX: '100%' }}
                whileInView={{ opacity: 1, translateX: '0%' }}
                transition={{ duration: 1 }}
            />
        </motion.div>
    )
};

export default HeroPage;