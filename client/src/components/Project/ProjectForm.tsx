import React, { useState, useRef } from 'react';
import { Code, Image } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import NotFound from '../NotFound/NotFound';
import { admin } from '../../constants/util';
import { State } from '../../interfaces/store';
import { addProject } from '../../actions/project';
import { handleImgChange } from '../../functions/util';

const ProjectForm: React.FC = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch: any = useDispatch();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = {
            title,
            image,
            description
        };
        console.log(formData);
        dispatch(addProject(formData, navigate));
    };

    const { user } = useSelector((state: State) => state.auth);
    const { isLoading } = useSelector((state: State) => state.project);
    if (user?.type !== admin) return <NotFound message='Page not found' />

    return (
        <div className='bg-lightgrey min-h-rem flex items-center justify-center pt-3 pb-10 px-3'>
            <form onSubmit={handleSubmit} className='max-w-2xl w-full shadow-large bg-white rounded-lg p-5'>
                <h1 className='text-lg font-medium text-center text-dark mb-4'>Add a project</h1>
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
                        <input ref={fileInputRef} onChange={(e) => handleImgChange(e, setImage)} className='absolute opacity-0 pointer-events-none' type="file" id='image' required />
                    </div>
                </div>
                <div className='mb-3'>
                    <label className='font-medium' htmlFor="description">Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none resize-none' name="description" id="description" value={description} cols={30} rows={10} required></textarea>
                </div>
                <button className={`w-full py-2 flex items-center justify-center gap-1 bg-primary text-white font-medium rounded-sm transition-bg duration-300 ${isLoading ? 'cursor-not-allowed' : 'hover:bg-primarydark'}`} type="submit" disabled={isLoading}>
                    <Code size={22} className='inline' /> {isLoading ? 'Adding...' : 'Add'}
                </button>
            </form>
        </div>
    )
};

export default ProjectForm;