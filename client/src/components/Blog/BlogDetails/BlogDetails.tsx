import React, { useEffect } from 'react';
import moment from 'moment';
import { Clock } from 'react-feather';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Comments from './Comments';
import Loader from '../../Loader/Loader';
import NotFound from '../../NotFound/NotFound';
import { State } from '../../../interfaces/store';
import { getBlogById } from '../../../actions/blog';
import { REMOVE_SELECTED_BLOG } from '../../../constants/blog';

const BlogDetails: React.FC = () => {
    const { id } = useParams();
    const dispatch: any = useDispatch();

    useEffect(() => {
        document.title = 'Blog Details | bhu-1-der';
        dispatch(getBlogById(id || ''));
        return () => {
            dispatch({ type: REMOVE_SELECTED_BLOG });
        };
    }, []);

    const { isLoading, selectedBlog } = useSelector((state: State) => state.blog);
    if(isLoading) return <Loader />
    if(!selectedBlog) return <NotFound message='Blog not found' />

    return (
        <div className='bg-lightgrey min-h-rem flex justify-center pt-3 pb-10 px-3'>
            <div className='max-w-3xl w-full'>
                <h3 className='text-2xl font-medium text-center text-dark mb-4 mt-n10px'>Blog Details</h3>
                <div className='shadow-large rounded-xl bg-white p-7 mb-5'>
                    <p className='text-darkgrey flex items-center justify-end gap-1'>
                        <Clock size={20} className='inline' />
                        <span className='text-sm'>{moment(selectedBlog?.createdAt).format('LL')}</span>
                    </p>
                    <h2 className='font-semibold text-lg text-dark'>{selectedBlog?.title}</h2>
                    <p className='text-normal mt-2'>{selectedBlog?.description}</p>
                </div>
                <Comments
                    id={selectedBlog?._id?.toString()}
                    comments={selectedBlog?.comments}
                />
            </div>
        </div>
    )
};

export default BlogDetails;