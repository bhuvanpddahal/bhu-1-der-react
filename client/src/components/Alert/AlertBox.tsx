import React from 'react';
import { useSelector } from 'react-redux';
import { AlertTriangle, CheckCircle } from 'react-feather';

import { State } from '../../interfaces/store';
import { failure } from '../../constants/alert';

const AlertBox: React.FC = () => {
    const { message, type, show } = useSelector((state: State) => state.alert);

    return (
        <div className={`max-w-lg flex items-center gap-1 fixed z-20 top-3 right-3 pointer-events-none opacity-0 transition-opacity duration-300 bg-white shadow-medium rounded-md px-3 py-2 ${show && "pointer-events-auto opacity-100"}`}>
            {type === failure ? (
                <AlertTriangle className='text-secondary' />
            ) : (
                <CheckCircle className='text-primary' />
            )}
            <span className='text-dark'>{message}</span>
        </div>
    )
};

export default AlertBox;