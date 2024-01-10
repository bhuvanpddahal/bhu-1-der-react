import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Comment from './Comment';
import CommentInput from './CommentInput';
import FirstImg from '../../../images/assets/first.png';
import LoginImg from '../../../images/assets/login.png';
import { State } from '../../../interfaces/store';
import { commentOnBlog } from '../../../actions/blog';
import { CommentsProp } from '../../../interfaces/blog';

const Comments: React.FC<CommentsProp> = ({
    id,
    comments
}: CommentsProp) => {
    const dispatch: any = useDispatch();
    const [comment, setComment] = useState('');
    const [isCommenting, setIsCommenting] = useState(false);

    const handleComment = () => {
        setIsCommenting(true);
        if(comment.trim()) dispatch(commentOnBlog(id, comment.trim(), setComment));
        setIsCommenting(false);
    };

    const { user } = useSelector((state: State) => state.auth);
    const { isMiniLoading } = useSelector((state: State) => state.blog);

    return (
        <div className='shadow-large rounded-xl bg-white'>
            <header className='p-7 border-b border-solid border-grey'>
                <div className='flex items-center justify-between mb-2'>
                    <h3 className='font-medium'>Comments</h3>
                    <p className='font-semibold text-dark'>{comments?.length}</p>
                </div>
                {user ? (
                    <CommentInput
                        isMiniLoading={isCommenting && isMiniLoading}
                        type='comment'
                        state={comment}
                        setter={setComment}
                        handler={handleComment}
                    />
                ) : (
                    <div className='text-center text-medium'>You must be logged in to comment</div>
                )}
            </header>
            <ul className='p-7'>
                {comments?.length ? (
                    comments?.map((comment, index) => (
                        <Comment
                            key={index}
                            user={user}
                            blogId={id}
                            comment={comment}
                            isMiniLoading={isMiniLoading}
                            dispatch={dispatch}
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