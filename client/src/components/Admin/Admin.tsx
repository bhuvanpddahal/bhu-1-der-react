import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Code, File } from 'react-feather';

import NotFound from '../NotFound/NotFound';
import { admin } from '../../constants/util';
import { State } from '../../interfaces/store';

const Admin: React.FC = () => {
    const { user } = useSelector((state: State) => state.auth);

    if(user?.type !== admin) return <NotFound message='Page not found' />

    return (
        <div className='bg-lightgrey min-h-rem flex items-center justify-center gap-4 pt-3 pb-10 px-3'>
            <Link className='px-4 py-2 flex items-center gap-1 bg-primary text-white rounded-sm transition-bg duration-300 hover:bg-primarydark' to='/projects/add'>
                <Code size={22} className='inline' /> Add a project
            </Link>
            <Link className='px-4 py-2 flex items-center gap-1 bg-primary text-white rounded-sm transition-bg duration-300 hover:bg-primarydark' to='/blogs/create'>
                <File size={22} className='inline' /> Create a blog
            </Link>
        </div>
    )
};

export default Admin;