import React from 'react';

import HeroImg from '../../images/hero.avif';

const HeroPage: React.FC = () => {
    return (
        <div className='flex items-center gap-3 px-10p pt-2 pb-5 bg-lightgrey'>
            <div className='w-full'>
                <h3 className='text-4xl leading-50px text-dark font-light'>Hello, I'm <span>Bhuvan Prasad Dahal</span> from Nepal.</h3>
                <div className='flex items-center gap-3 mt-4'>
                    <button className='px-9 py-4 bg-white rounded-sm shadow-sm'>Get Started</button>
                    <button className='px-9 py-4 bg-white rounded-sm shadow-sm'>Watch the video</button>
                </div>
            </div>
            <img className='w-55p rounded-xl' src={HeroImg} alt="img" />
        </div>
    )
};

export default HeroPage;