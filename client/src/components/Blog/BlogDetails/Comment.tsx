import React, { useState } from 'react';
import { X } from 'react-feather';

import Replies from './Replies';
import CommentInput from './CommentInput';
import Img from '../../../images/assets/intelligence.avif';
import { CommentProp } from '../../../interfaces/blog';
import { replyOnComment } from '../../../actions/blog';

const Comment: React.FC<CommentProp> = ({
    user,
    blogId,
    comment,
    isMiniLoading,
    dispatch,
    isLast
}: CommentProp) => {
    const [reply, setReply] = useState('');
    const [isReplying, setIsReplying] = useState(false);
    const [showReplies, setShowReplies] = useState(false);

    const toggleShowReplies = () => {
        setShowReplies((prevShowReplies) => !prevShowReplies);
    };
    const handleReply = () => {
        setIsReplying(true);
        dispatch(replyOnComment(blogId, comment._id.toString(), reply, setReply));
        setIsReplying(false);
    };

    return (
        <li className={!isLast ? 'border-b border-solid border-grey pb-5 mb-5' : ''}>
            <div className='flex items-center gap-2'>
                <img className='h-40px w-40px rounded-full object-cover' src={Img} alt="" />
                <h4 className='font-medium text-15px'>{comment?.username}</h4>
            </div>
            <div className='ml-50px mt-n5px'>
                <p className='text-dark text-15px line-clamp-3 mb-2'>{comment?.comment}</p>
                {showReplies && (
                    <Replies
                        replies={comment?.replies}
                    />
                )}
                <div className={`flex items-center ${user ? 'justify-between' : 'justify-end'} text-15px mt-2`}>
                    {isReplying ? (
                        <>
                            <CommentInput
                                isMiniLoading={isMiniLoading}
                                type='reply'
                                state={reply}
                                setter={setReply}
                                handler={handleReply}
                            />
                            <X onClick={() => setIsReplying(false)} color='#333' size={36} className='p-2 cursor-pointer rounded-full transition-bg duration-300 hover:bg-lightgrey' />
                        </>
                    ) : (
                        <>
                            {user && (
                                <button onClick={() => setIsReplying(true)} className='px-4 py-9px bg-primary text-white rounded-sm transition-bg duration-300 hover:bg-primarydark'>Reply</button>
                            )}
                            {comment?.replies?.length > 0 && (
                                <button onClick={toggleShowReplies} className='px-4 py-9px text-medium font-medium rounded-sm transition-bg duration-300 hover:bg-lightgrey'>{showReplies ? 'Hide' : 'View'} all replies</button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </li>
    )
};

export default Comment;