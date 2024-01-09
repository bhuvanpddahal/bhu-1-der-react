import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Play } from 'react-feather';

import Comment from './Comment';
import FirstImg from '../../../images/assets/first.png';
import LoginImg from '../../../images/assets/login.png';
import LoadingImg from '../../../images/assets/loading.gif';
import { State } from '../../../interfaces/store';
import { commentOnBlog } from '../../../actions/blog';
import { CommentsProp } from '../../../interfaces/blog';

const Comments: React.FC<CommentsProp> = ({
    id,
    comments
}: CommentsProp) => {
    const dispatch: any = useDispatch();
    const [comment, setComment] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') handleComment();
    };
    const handleComment = () => {
        if(comment.trim()) dispatch(commentOnBlog(id, comment.trim(), setComment));
    };

    const { user } = useSelector((state: State) => state.auth);
    const { isMiniLoading } = useSelector((state: State) => state.blog);

    return (
        <div className='shadow-large rounded-xl bg-white'>
            <header className='p-7 border-b border-solid border-grey'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-medium'>Comments</h3>
                    <p className='font-semibold text-dark'>{comments?.length}</p>
                </div>
                {user ? (
                    <div className='relative mt-2'>
                        <input onKeyDown={handleKeyDown} onChange={(e) => setComment(e.target.value)} className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none' type="text" placeholder='Write a comment' value={comment} />
                        {isMiniLoading ? (
                            <img className='absolute top-0 right-0 h-full w-40px object-cover bg-grey cursor-not-allowed' src={LoadingImg} alt="..." />
                        ) : (
                            <Play onClick={handleComment} className='absolute top-0 right-0 h-full w-40px p-2 bg-primary text-white rounded-sm cursor-pointer transition-bg duration-300 hover:bg-primarydark' />
                        )}
                    </div>
                ) : (
                    <div className='mt-2 text-center text-medium'>You must be logged in to comment</div>
                )}
            </header>
            <ul className='p-7'>
                {comments?.length ? (
                    comments?.map((comment, index) => (
                        <Comment
                            key={index}
                            comment={comment}
                            isLast={index === comments?.length - 1}
                        />
                    ))
                ) : (
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <img className='h-110px' src={user ? FirstImg : LoginImg} alt="" />
                        <p className='text-darkgrey'>{user ? 'Be the first person to comment' : 'Please login first to comment'}</p>
                    </div>
                )}
            </ul>
        </div>
    )
};

export default Comments;