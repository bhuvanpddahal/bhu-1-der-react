import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import Project from './Project';
import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';
import MiniLoader from '../Loader/MiniLoader';
import { State } from '../../interfaces/store';
import { getProjects, getMoreProjects } from '../../actions/project';

const Projects: React.FC = () => {
    const dispatch: any = useDispatch();

    const morePosts = () => {
        dispatch(getMoreProjects(page, limit));
    };

    useEffect(() => {
        document.title = 'Projects | bhu-1-der';
        if (!fetched) {
            dispatch(getProjects(1, limit));
        }
    }, []);

    const { isLoading, fetched, projects, page, limit, totalPages } = useSelector((state: State) => state.project);
    if (isLoading) return <Loader />
    if (!projects.length) return <NotFound message='No projects' />

    return (
        <div className='bg-lightgrey min-h-rem flex justify-center pt-3 pb-10 px-3'>
            <div className='max-w-4xl w-full'>
                <h3 className='text-2xl font-medium text-center text-dark mb-4 mt-n10px'>Projects</h3>
                <ul>
                    <InfiniteScroll
                        dataLength={projects.length}
                        next={morePosts}
                        hasMore={page <= totalPages}
                        loader={<MiniLoader />}
                        scrollThreshold={'0px'}
                        className='grid grid-cols-1 md:grid-cols-2 gap-5'
                        style={{ overflow: 'visible' }}
                    >
                        {projects.map((project) => (
                            <Project
                                key={project?._id}
                                id={project?._id?.toString()}
                                title={project?.title}
                                image={project?.image}
                                description={project?.description}
                                dispatch={dispatch}
                            />
                        ))}
                    </InfiniteScroll>
                </ul>
            </div>
        </div>
    )
};

export default Projects;