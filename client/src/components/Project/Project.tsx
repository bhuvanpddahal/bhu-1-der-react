import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';

import Options from '../Admin/Options';
import ConfirmBox from '../Admin/ConfirmBox';
import DeleteLoader from '../Loader/DeleteLoader';
import { admin } from '../../constants/util';
import { State } from '../../interfaces/store';
import { deleteProject } from '../../actions/project';
import { ProjectProp } from '../../interfaces/project';

const Project: React.FC<ProjectProp> = ({
    id,
    title,
    image,
    description,
    dispatch
}: ProjectProp) => {
    const navigate = useNavigate();
    const optionsRef = useRef<HTMLDivElement>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [showConfrimBox, setShowConfirmBox] = useState(false);
    
    const toggleShowOptions = () => {
        setShowOptions((prevShowOptions) => !prevShowOptions);
    };
    const handleEditClick = () => {
        navigate(`/projects/edit/${id}`);
    };
    const handleDeleteClick = () => {
        setShowConfirmBox(true);
    };
    const handleDeleteConfirm = () => {
        setIsDeleting(true);
        setShowConfirmBox(false);
        dispatch(deleteProject(id));
    };
    const handleOutsideClick = (e: any) => {
        if (optionsRef.current && !optionsRef.current.contains(e.target)) {
            setShowOptions(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const { user } = useSelector((state: State) => state.auth);
    const { isMiniLoading } = useSelector((state: State) => state.blog);
    if(isDeleting && isMiniLoading) return <DeleteLoader />

    return (
        <li className='bg-white p-7 rounded-xl shadow-large'>
            <AnimatePresence>
                {showConfrimBox && (
                    <ConfirmBox
                        type='project'
                        title={title}
                        description={description}
                        setShowConfirmBox={setShowConfirmBox}
                        handleDeleteConfirm={handleDeleteConfirm}
                    />
                )}
            </AnimatePresence>
            <img className='w-full h-200px object-cover mb-3 rounded-md' src={image} alt="" />
            <h2 className='font-semibold text-lg text-dark line-clamp-2'>{title}</h2>
            <p className='text-normal mt-2 mb-6 line-clamp-3'>{description}</p>
            <div className='flex items-center justify-between'>
                <Link className='px-4 py-2 bg-primary text-white rounded-sm transition-bg duration-300 hover:bg-primarydark' to={`/projects/${id}`}>See more</Link>
                {user?.type === admin && (
                    <Options
                        optionsRef={optionsRef}
                        showOptions={showOptions}
                        toggleShowOptions={toggleShowOptions}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                    />
                )}
            </div>
        </li>
    )
};

export default Project;