import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Clock } from 'react-feather';
import moment from 'moment';

import Options from '../Admin/Options';
import ConfirmBox from '../Admin/ConfirmBox';
import { admin } from '../../constants/util';
import { State } from '../../interfaces/store';
import { BlogProp } from '../../interfaces/blog';

const Blog: React.FC<BlogProp> = ({
    id,
    title,
    description,
    createdAt
}: BlogProp) => {
    const navigate = useNavigate();
    const optionsRef = useRef<HTMLDivElement>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [showConfrimBox, setShowConfirmBox] = useState(false);
    
    const toggleShowOptions = () => {
        setShowOptions((prevShowOptions) => !prevShowOptions);
    };
    const handleEditClick = () => {
        navigate(`/blogs/edit/${id}`);
    };
    const handleDeleteClick = () => {
        setShowConfirmBox(true);
    };
    const handleDeleteConfirm = () => {
        console.log('delete confirmed');
        setShowConfirmBox(false);
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

    return (
        <li className='bg-white px-7 pt-5 pb-8 rounded-xl shadow-large'>
            {showConfrimBox && (
                <ConfirmBox
                    type='blog'
                    title={title}
                    description={description}
                    setShowConfirmBox={setShowConfirmBox}
                    handleDeleteConfirm={handleDeleteConfirm}
                />
            )}
            <p className='text-darkgrey flex items-center justify-end gap-1'>
                <Clock size={20} className='inline' />
                <span className='text-sm'>{moment(createdAt).format('LL')}</span>
            </p>
            <h2 className='font-semibold text-lg text-dark line-clamp-2 mb-2'>{title}</h2>
            <p className='text-normal mt-2 mb-6 line-clamp-5'>{description}</p>
            <div className='flex items-center justify-between'>
                <Link className='px-4 py-2 bg-primary text-white rounded-sm transition-bg duration-300 hover:bg-primarydark' to={`/blogs/${id}`}>Read more</Link>
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

export default Blog;