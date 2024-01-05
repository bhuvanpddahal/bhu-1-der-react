import React from 'react';
import { Play, GitHub } from 'react-feather';
import { Link } from 'react-router-dom';

import HeroImg from '../../images/hero.avif';

const HeroPage: React.FC = () => {
    return (
        <div className='flex items-center gap-3 px-10p pt-2 pb-5 bg-lightgrey'>
            <div className='w-full'>
                <h3 className='text-4xl leading-50px text-dark font-light'>Hello, I'm <span>Bhuvan Prasad Dahal</span> from Nepal.</h3>
                <div className='flex items-center gap-3 mt-4'>
                    <Link to='/auth' className='px-9 py-4 bg-white rounded-sm shadow-sm transition-bg duration-200 hover:bg-dim'>
                        <Play color='#333' className='inline' /> Get Started
                    </Link>
                    <Link to='https://www.github.com/BhuvanPdDahal' className='px-9 py-4 bg-white rounded-sm shadow-sm transition-bg duration-200 hover:bg-dim' target='_blank'>
                        <GitHub color='#333' className='inline' /> GitHub Account
                    </Link>
                </div>
            </div>
            <img className='w-55p rounded-xl hidden md:inline-block' src={HeroImg} alt="img" />
        </div>
    )
};

export default HeroPage;