import React from 'react';
import { Play } from 'react-feather';
import { motion } from 'framer-motion';

import LoadingImg from '../../../images/assets/loading.gif';
import { CommentInputProp } from '../../../interfaces/blog';

const CommentInput: React.FC<CommentInputProp> = ({
    isMiniLoading,
    type,
    state,
    setter,
    handler
}: CommentInputProp) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') handler();
    };

    return (
        <motion.div
            className='relative'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <input onKeyDown={handleKeyDown} onChange={(e) => setter(e.target.value)} className='w-full border border-solid border-grey pl-3 pr-12 py-2 rounded-sm outline-none' type="text" placeholder={`Write a ${type}`} value={state} />
            {isMiniLoading ? (
                <img className='absolute top-0 right-0 h-full w-40px object-cover bg-grey cursor-not-allowed' src={LoadingImg} alt="..." />
            ) : (
                <Play onClick={handler} className='absolute top-0 right-0 h-full w-40px p-2 bg-primary text-white rounded-e-sm cursor-pointer transition-bg duration-300 hover:bg-primarydark' />
            )}
        </motion.div>
    )
};

export default CommentInput;