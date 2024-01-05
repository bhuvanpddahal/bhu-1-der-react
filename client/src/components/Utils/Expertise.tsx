import React from 'react';

const Expertise: React.FC = () => {
    return (
        <div className='relative text-2xl py-60px px-4 bg-lightgrey'>
            <h2 className='max-w-xl mx-auto mb-5 flex items-center justify-center h-2px bg-medium'>
                <span className='text-3xl px-5 bg-lightgrey font-medium text-dark'>Expertise</span>
            </h2>
            <div className='absolute inset-0 bg-intro bg-contain bg-no-repeat bg-center opacity-20'></div>
            <div className='relative z-10 max-w-3xl mx-auto text-center leading-10 text-dark'>Passionate and innovative software engineer with a keen eye for creative solutions. With a solid foundation in coding and a love for problem-solving, I thrive in crafting elegant and efficient software solutions. My journey in the tech world is fueled by a relentless pursuit of knowledge and a commitment to delivering high-quality results. From conceptualizing ideas to bringing them to life through code, I bring a unique blend of technical expertise and creative flair to every project. Let's embark on a journey to transform ideas into reality through the power of code and imagination.</div>
        </div>
    )
};

export default Expertise;