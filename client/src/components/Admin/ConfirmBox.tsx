import React from 'react';
import { X } from 'react-feather';
import { motion } from 'framer-motion';

import { ConfirmBoxProp } from '../../interfaces/util';

const ConfirmBox: React.FC<ConfirmBoxProp> = ({
    type,
    title,
    description,
    setShowConfirmBox,
    handleDeleteConfirm
}: ConfirmBoxProp) => {
    return (
        <motion.div
            className='fixed p-2 inset-0 flex items-center justify-center z-30'
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className='w-400px px-5 pt-4 pb-5 bg-white shadow-modal rounded-xl'
                initial={{ translateY: '-100%', opacity: 0 }}
                animate={{ translateY: '0%', opacity: 1 }}
                exit={{ translateY: '100%', opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <header className='flex items-center justify-between'>
                    <h1 className='font-semibold text-primarydark text-17px'>Delete {type}</h1>
                    <X onClick={() => setShowConfirmBox(false)} size={36} className='p-2 rounded-full cursor-pointer transition-bg duration-300 hover:bg-lightgrey' />
                </header>
                <h3 className='my-1'>Are you sure you want to delete this {type}?</h3>
                <div className='my-3'>
                    <h3 className='font-medium line-clamp-1'>{title}</h3>
                    <p className='text-normal line-clamp-3'>{description}</p>
                </div>
                <div className='flex justify-between mt-4'>
                    <button onClick={handleDeleteConfirm} className='w-100px py-1 bg-secondary rounded-sm transition-bg duration-300 hover:bg-grey'>Yes</button>
                    <button onClick={() => setShowConfirmBox(false)} className='w-100px py-1 bg-primary text-lightgrey rounded-sm transition-bg duration-300 hover:bg-primarydark'>No</button>
                </div>
            </motion.div>
        </motion.div>
    )
};

export default ConfirmBox;