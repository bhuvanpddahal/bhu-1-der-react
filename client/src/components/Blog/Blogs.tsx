import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import Blog from './Blog';
import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';
import MiniLoader from '../Loader/MiniLoader';
import { State } from '../../interfaces/store';
import { getBlogs, getMoreBlogs } from '../../actions/blog';

const Blogs: React.FC = () => {
    const dispatch: any = useDispatch();

    const morePosts = () => {
        dispatch(getMoreBlogs(page, limit));
    };

    useEffect(() => {
        if (!fetched) dispatch(getBlogs(1, limit));
    }, []);

    const { isLoading, fetched, blogs, page, limit, totalPages } = useSelector((state: State) => state.blog);
    if (isLoading) return <Loader />
    if (!blogs.length) return <NotFound message='No blogs' />

    return (
        <div className='bg-lightgrey min-h-rem flex justify-center pt-3 pb-10 px-3'>
            <div className='max-w-4xl w-full'>
                <h3 className='text-2xl font-medium text-center text-dark mb-4 mt-n10px'>Blogs</h3>
                <ul>
                    <InfiniteScroll
                        dataLength={blogs.length}
                        next={morePosts}
                        hasMore={page <= totalPages}
                        loader={<MiniLoader />}
                        scrollThreshold={'0px'}
                        className='grid grid-cols-1 md:grid-cols-2 gap-5'
                    >
                        {blogs.map((blog) => (
                            <Blog
                                key={blog?._id}
                                id={blog?._id?.toString()}
                                title={blog?.title}
                                description={blog?.description}
                                createdAt={blog?.createdAt}
                                dispatch={dispatch}
                            />
                        ))}
                    </InfiniteScroll>
                </ul>
            </div>
        </div>
    )
};

export default Blogs;