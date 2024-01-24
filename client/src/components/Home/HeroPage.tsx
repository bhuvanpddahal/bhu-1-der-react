import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, GitHub } from 'react-feather';

import HeroImg from '../../images/assets/hero.avif';

const HeroPage: React.FC = () => {
    return (
        <motion.div
            className='flex items-center gap-5 px-4 xs:px-10p pt-2 pb-10 overflow-hidden'
            initial={{ backgroundColor: '#fff' }}
            whileInView={{ backgroundColor: '#eee' }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            <div className='w-full'>
                <motion.h3
                    className='leading-40px xs:leading-50px text-2xl xs:text-3xl md:text-4xl text-dark font-light'
                    initial={{ opacity: 0, translateX: '-100%' }}
                    whileInView={{ opacity: 1, translateX: '0%' }}
                    transition={{ duration: 1 }}
                >
                    Hello, I'm <span className='text-primarydark'>Bhuvan Prasad Dahal</span> from Nepal.
                </motion.h3>
                <motion.div
                    className='flex flex-col xs:flex-row md:flex-col lg:flex-row gap-3 mt-4'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <Link to='/get-started' className='px-7 xs:px-9 py-3 xs:py-4 text-center bg-white rounded-sm shadow-sm transition-bg duration-300 hover:bg-dim'>
                        <Play color='#333' className='inline h-22px xs:h-24px w-22px sm:w-24px' /> Get Started
                    </Link>
                    <Link to='https://www.github.com/BhuvanPdDahal' className='px-7 xs:px-9 py-3 xs:py-4 text-center bg-white rounded-sm shadow-sm transition-bg duration-300 hover:bg-dim' target='_blank'>
                        <GitHub color='#333' className='inline' /> GitHub Account
                    </Link>
                </motion.div>
            </div>
            <motion.img 
                className='shrink w-40p object-cover rounded-lg hidden md:inline-block'
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