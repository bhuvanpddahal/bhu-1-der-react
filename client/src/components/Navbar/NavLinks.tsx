import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks: React.FC = () => {
    return (
        <>
            <Link to='/auth' className='text-darkgrey hover:text-normal'>Sign In</Link>
            <Link to='/auth' className='text-darkgrey hover:text-normal'>Get Started</Link>
        </>
    )
};

export default NavLinks;