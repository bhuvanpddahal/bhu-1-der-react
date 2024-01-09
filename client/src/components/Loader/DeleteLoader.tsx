import React from 'react';

import LoadingImg from '../../images/assets/loading.gif';

const DeleteLoader: React.FC = () => {
    return (
        <div className='flex items-center justify-center'>
            <img className='h-60px' src={LoadingImg} alt="deleting..." />
        </div>
    )
};

export default DeleteLoader;