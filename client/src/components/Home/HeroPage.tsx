import React from 'react';
import { Link } from 'react-router-dom';
import { Play, GitHub } from 'react-feather';
import { motion, useInView } from 'framer-motion';

import HeroImg from '../../images/assets/hero.avif';

const HeroPage: React.FC = () => {
    return (
        <div className='flex items-center gap-5 px-10p pt-2 pb-10 bg-lightgrey'>
            <div className='w-full'>
                <h3 className='text-4xl leading-50px text-dark font-light'>Hello, I'm <span className='text-primarydark'>Bhuvan Prasad Dahal</span> from Nepal.</h3>
                <div className='flex items-center gap-3 flex-wrap mt-4'>
                    <Link to='/auth' className='px-9 py-4 bg-white rounded-sm shadow-sm transition-bg duration-300 hover:bg-dim'>
                        <Play color='#333' className='inline' /> Get Started
                    </Link>
                    <Link to='https://www.github.com/BhuvanPdDahal' className='px-9 py-4 bg-white rounded-sm shadow-sm transition-bg duration-300 hover:bg-dim' target='_blank'>
                        <GitHub color='#333' className='inline' /> GitHub Account
                    </Link>
                </div>
            </div>
            <img className='shrink h-300px lg:h-380px hidden md:inline-block rounded-lg' src={HeroImg} alt="img" />
        </div>
    )
};

export default HeroPage;