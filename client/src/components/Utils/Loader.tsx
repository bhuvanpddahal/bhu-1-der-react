import React from 'react';

import LoadingImg from '../../images/loading.gif';

const Loader: React.FC = () => {
    return (
        <div className='flex items-center justify-center'>
            <img className='h-60px' src={LoadingImg} alt="..." />
        </div>
    )
};

export default Loader;