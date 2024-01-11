import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Clock } from 'react-feather';
import moment from 'moment';

import Options from '../Admin/Options';
import ConfirmBox from '../Admin/ConfirmBox';
import DeleteLoader from '../Loader/DeleteLoader';
import { admin } from '../../constants/util';
import { State } from '../../interfaces/store';
import { deleteBlog } from '../../actions/blog';
import { BlogProp } from '../../interfaces/blog';

const Blog: React.FC<BlogProp> = ({
    id,
    title,
    description,
    createdAt,
    dispatch
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
        setIsDeleting(true);
        setShowConfirmBox(false);
        dispatch(deleteBlog(id));
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
        <motion.li
            className='bg-white px-7 pt-5 pb-7 rounded-xl shadow-large'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <AnimatePresence>
                {showConfrimBox && (
                    <ConfirmBox
                        type='blog'
                        title={title}
                        description={description}
                        setShowConfirmBox={setShowConfirmBox}
                        handleDeleteConfirm={handleDeleteConfirm}
                    />
                )}
            </AnimatePresence>
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
        </motion.li>
    )
};

export default Blog;