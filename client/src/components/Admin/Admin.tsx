import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Code, File } from 'react-feather';

import NotFound from '../NotFound/NotFound';
import AdminImg from '../../images/assets/admin.png';
import { admin } from '../../constants/util';
import { State } from '../../interfaces/store';

const Admin: React.FC = () => {
    document.title = 'Admin | bhu-1-der';
    const { user } = useSelector((state: State) => state.auth);
    if(user?.type !== admin) return <NotFound message='Page not found' />

    return (
        <div className='bg-lightgrey min-h-smrem md:min-h-mdrem flex flex-col items-center justify-center gap-6 pt-3 pb-10 px-3'>
            <motion.img
                className='h-140px md:h-160px'
                src={AdminImg}
                alt="admin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
            <motion.div
                className='flex gap-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Link className='px-4 py-2 flex items-center gap-1 bg-primary text-white rounded-sm transition-bg duration-300 hover:bg-primarydark' to='/projects/add'>
                    <Code size={22} className='inline' /> Add a project
                </Link>
                <Link className='px-4 py-2 flex items-center gap-1 bg-primary text-white rounded-sm transition-bg duration-300 hover:bg-primarydark' to='/blogs/create'>
                    <File size={22} className='inline' /> Create a blog
                </Link>
            </motion.div>
        </div>
    )
};

export default Admin;