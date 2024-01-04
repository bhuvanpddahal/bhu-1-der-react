import React from 'react';

import HeroImg from '../../images/hero.jpg';

const HeroPage = () => {
  return (
    <div className='flex items-center px-10p py-2 bg-lightgrey'>
        <div className='w-full'>
            <h3 className='text-4xl leading-50px text-dark font-light'>Meet Dunked — the simple way to build your portfolio & showcase your work in style</h3>
            <div className='flex items-center gap-3 mt-4'>
                <button className='px-9 py-4 bg-grey rounded-sm'>Get Started</button>
                <button className='px-9 py-4 bg-grey rounded-sm'>Watch the video</button>
            </div>
        </div>
        <img className='w-55p rounded-xl' src={HeroImg} alt="img" />
    </div>
  )
}

export default HeroPage;