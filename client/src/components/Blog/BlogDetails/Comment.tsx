import React, { useState } from 'react';

import Img from '../../../images/assets/intelligence.avif';
import { CommentProp } from '../../../interfaces/blog';

const Comment: React.FC<CommentProp> = ({
    comment,
    isLast
}: CommentProp) => {
    const [isReplying, setIsReplying] = useState(false);

    return (
        <li className={!isLast ? 'border-b border-solid border-grey pb-5 mb-5' : ''}>
            <div className='flex items-center gap-2'>
                <img className='h-40px w-40px rounded-full object-cover' src={Img} alt="" />
                <h4 className='font-medium text-15px'>{comment?.username}</h4>
            </div>
            <div className='ml-50px mt-n5px'>
                <p className='text-dark text-15px line-clamp-3'>{comment?.comment}</p>
                <div className='flex justify-between text-15px mt-2'>
                    <button className='px-4 py-2 bg-primary text-white rounded-sm transition-bg duration-300 hover:bg-primarydark'>Reply</button>
                    {comment?.replies?.length > 0 && (
                        <button className='px-4 py-2 text-medium font-medium rounded-sm transition-bg duration-300 hover:bg-lightgrey'>View all replies</button>
                    )}
                </div>
            </div>
        </li>
    )
};

export default Comment;