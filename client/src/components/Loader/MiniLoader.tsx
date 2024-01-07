import React from 'react';

import LoadingImg from '../../images/loading.gif';

const MiniLoader: React.FC = () => {
    return (
        <div className='col-span-2 flex justify-center'>
            <img className='h-60px' src={LoadingImg} alt="loading..." />
        </div>
    )
};

export default MiniLoader;