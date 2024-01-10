import React from 'react';

import Img from '../../../images/assets/intelligence.avif';
import { ReplyProp } from '../../../interfaces/blog';

const Reply: React.FC<ReplyProp> = ({
    username,
    reply,
    isLast
}: ReplyProp) => {
    return (
        <li className={`py-3 mt-3 ${isLast ? 'border-y mb-3' : 'border-t'} border-solid border-grey`}>
            <div className='flex items-center gap-2'>
                <img className='h-40px w-40px rounded-full object-cover' src={Img} alt="" />
                <h4 className='font-medium text-15px'>{username}</h4>
            </div>
            <div className='ml-50px mt-n5px'>
                <p className='text-dark text-15px line-clamp-3'>{reply}</p>
            </div>
        </li>
    )
};

export default Reply;