import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Code, Image, Edit } from 'react-feather';
import { motion } from 'framer-motion';

import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';
import { admin } from '../../constants/util';
import { State } from '../../interfaces/store';
import { getProjectById } from '../../actions/project';
import { handleImgChange } from '../../functions/util';
import { addProject, editProject } from '../../actions/project';
import { REMOVE_SELECTED_PROJECT } from '../../constants/project';

const ProjectForm: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch: any = useDispatch();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    const setStates = () => {
        setTitle(selectedProject?.title || '');
        setDescription(selectedProject?.description || '');
        setImage(selectedProject?.image || '');
        setLink(selectedProject?.link || '');
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = {
            title: title.trim(),
            image,
            description: description.trim(),
            link: link.trim()
        };
        if(id) dispatch(editProject(id, formData, navigate));
        else dispatch(addProject(formData, navigate));
    };

    const { user } = useSelector((state: State) => state.auth);
    const { isLoading, isMiniLoading, selectedProject } = useSelector((state: State) => state.project);

    useEffect(() => {
        if(user?.type !== admin) document.title = 'Error | bhu-1-der';
        else if(id) {
            document.title = 'Edit Project | bhu-1-der';
            dispatch(getProjectById(id || ''));
        }
        else document.title = 'Add Project | bhu-1-der';
        return () => {
            dispatch({ type: REMOVE_SELECTED_PROJECT });
        };
    }, [user]);

    useEffect(() => {
        if(user?.type === admin && id) setStates();
    }, [selectedProject]);

    if(user?.type !== admin) return <NotFound message='Page not found' />
    if(isLoading) return <Loader />
    if(id && !selectedProject) return <NotFound message='Project not found' />

    return (
        <div className='bg-lightgrey min-h-rem flex items-center justify-center pt-3 pb-10 px-3'>
            <motion.form
                onSubmit={handleSubmit}
                className='max-w-2xl w-full shadow-large bg-white rounded-lg px-6 pt-4 pb-6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className='text-lg font-medium text-center text-dark mb-4'>{id ? 'Edit project' : 'Add a project'}</h1>
                <div className='mb-3'>
                    <label className='font-medium' htmlFor="title">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none' name='title' id='title' type="text" value={title} required />
                </div>
                <div>
                    <label className='font-medium' htmlFor="image">Image</label>
                    <div onClick={() => fileInputRef?.current?.click()} className={`relative mb-3 h-200px w-full border border-grey ${image?.length ? 'border-solid overflow-hidden' : 'border-dashed flex flex-col items-center justify-center p-3'} rounded-sm cursor-pointer`}>
                        {(image?.length) ? (
                            <img className='h-full w-full object-cover' src={image} alt="img" />
                        ) : (
                            <>
                                <Image className='text-grey' />
                                <p className='text-darkgrey text-center'>Click to upload the project image</p>
                            </>
                        )}
                        <input ref={fileInputRef} onChange={(e) => handleImgChange(e, setImage)} className='absolute opacity-0 pointer-events-none' type="file" id='image' required={id ? false : true} />
                    </div>
                </div>
                <div className='mb-2'>
                    <label className='font-medium' htmlFor="description">Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none resize-none' name="description" id="description" value={description} cols={30} rows={10} required></textarea>
                </div>
                <div className='mb-4'>
                    <label className='font-medium' htmlFor="title">Link</label>
                    <input onChange={(e) => setLink(e.target.value)} className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none' name='link' id='link' type="text" value={link} required />
                </div>
                <button className={`w-full py-2 flex items-center justify-center gap-1 bg-primary text-white font-medium rounded-sm transition-bg duration-300 ${isLoading ? 'cursor-not-allowed' : 'hover:bg-primarydark'}`} type="submit" disabled={isLoading}>
                    {id ? (
                        <><Edit size={22} className='inline' /> {isMiniLoading ? 'Editing...' : 'Edit'}</>
                    ) : (
                        <><Code size={22} className='inline' /> {isMiniLoading ? 'Adding...' : 'Add'}</>
                    )}
                </button>
            </motion.form>
        </div>
    )
};

export default ProjectForm;