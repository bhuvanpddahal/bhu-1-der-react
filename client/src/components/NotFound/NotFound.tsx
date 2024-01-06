import React from 'react';

import NotFoundImg from '../../images/not-found.jpg';

const NotFound: React.FC = () => {
    return (
        <div className='min-h-rem flex flex-col items-center justify-center py-5'>
            <img className='h-200px' src={NotFoundImg} alt="not-found" />
            <p className='text-dark'>Page not found</p>
        </div>
    )
};

export default NotFound;