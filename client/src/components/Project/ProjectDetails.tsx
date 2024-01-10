import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Clock } from 'react-feather';
import moment from 'moment';

import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';
import { State } from '../../interfaces/store';
import { getProjectById } from '../../actions/project';
import { REMOVE_SELECTED_PROJECT } from '../../constants/project';

const ProjectDetails: React.FC = () => {
    const { id } = useParams();
    const dispatch: any = useDispatch();

    useEffect(() => {
        document.title = 'Project Details | bhu-1-der';
        dispatch(getProjectById(id || ''));
        return () => {
            dispatch({ type: REMOVE_SELECTED_PROJECT });
        };
    }, []);

    const { isLoading, selectedProject } = useSelector((state: State) => state.project);
    if(isLoading) return <Loader />
    if(!selectedProject) return <NotFound message='Project not found' />

    return (
        <div className='bg-lightgrey min-h-rem flex justify-center pt-3 pb-10 px-3'>
            <div className='max-w-3xl w-full'>
                <h3 className='text-2xl font-medium text-center text-dark mb-4 mt-n10px'>Project Details</h3>
                <div className='shadow-large rounded-xl bg-white px-7 pt-7 pb-8'>
                    <img className='w-full h-300px object-cover mb-3 rounded-md' src={selectedProject?.image} alt="" />
                    <p className='text-darkgrey flex items-center justify-end gap-1'>
                        <Clock size={20} className='inline' />
                        <span className='text-sm'>{moment(selectedProject?.addedAt).format('LL')}</span>
                    </p>
                    <h2 className='font-semibold text-lg text-dark'>{selectedProject?.title}</h2>
                    <p className='text-normal mt-2 mb-6'>{selectedProject?.description}</p>
                    <Link className='px-4 py-2 bg-primary text-white rounded-sm transition-bg duration-300 hover:bg-primarydark' to={selectedProject?.link} target='_blank'>See code</Link>
                </div>
            </div>
        </div>
    )
};

export default ProjectDetails;