import React from 'react';

import NotFoundImg from '../../images/assets/not-found.png';

interface NotFoundProp {
    message: string;
}

const NotFound: React.FC<NotFoundProp> = ({ message }: NotFoundProp) => {
    return (
        <div className='min-h-smrem md:min-h-mdrem flex flex-col items-center justify-center gap-2 py-5 bg-lightgrey'>
            <img className='h-180px' src={NotFoundImg} alt="not-found" />
            <p className='text-dark'>{message}</p>
        </div>
    )
};

export default NotFound;