import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NotFound from '../NotFound/NotFound';
import { admin } from '../../constants/util';
import { State } from '../../interfaces/store';

const Admin: React.FC = () => {
    const { user } = useSelector((state: State) => state.auth);

    if(user?.type !== admin) return <NotFound />

    return (
        <div className='bg-lightgrey min-h-rem flex items-center justify-center gap-4 pt-3 pb-10 px-3'>
            <Link className='px-4 py-2 bg-primary text-white rounded-sm transition-bg duration-300 hover:bg-primarydark' to='/projects/add'>
                Add a project
            </Link>
            <Link className='px-4 py-2 bg-primary text-white rounded-sm transition-bg duration-300 hover:bg-primarydark' to='/blogs/create'>
                Create a blog
            </Link>
        </div>
    )
};

export default Admin;