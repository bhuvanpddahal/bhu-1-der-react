import React from 'react';

import Card from './Card';

const Contact: React.FC = () => {
    return (
        <div className='bg-lightgrey min-h-rem flex justify-center pt-3 pb-7 px-3'>
            <div className='max-w-4xl w-full'>
                <h3 className='text-2xl font-medium text-center text-dark mb-1 mt-n10px'>Contact</h3>
                <p className='text-center mb-5 text-normal font-medium'>Feel free to contact me!</p>
                <ul className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-5'>
                    <Card />
                    <Card />
                    <Card />
                </ul>
            </div>
        </div>
    )
};

export default Contact;