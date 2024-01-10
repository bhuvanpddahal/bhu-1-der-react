import React from 'react';
import { Link } from 'react-router-dom';

import { pictures } from '../../data/auth';
import { User } from '../../interfaces/auth';

interface NavLinksProp {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    pathname: string;
    user: User;
}

const NavLinks: React.FC<NavLinksProp> = ({ setShowMenu, pathname, user }: NavLinksProp) => {
    return (
        <>
            <Link onClick={() => setShowMenu(false)} to='/login' className={`transition-color duration-200 text-darkgrey ${pathname === '/login' ? 'text-normal' : ''} hover:text-normal`}>{user ? 'Log Out' : 'Sign In'}</Link>
            <Link onClick={() => setShowMenu(false)} to={`${user ? '/' : '/get-started'}`} className={`transition-color duration-200 ${user ? 'flex items-center gap-1 text-primary hover:text-primarydark' : pathname === '/get-started' ? 'text-normal' : 'text-darkgrey hover:text-normal'}`}>
                {user ? (
                    <><img className='h-30px w-30px object-cover rounded-full' src={pictures[user?.pictureIndex]} alt="" /> {user?.username}</>
                ) : 'Get Started'}
            </Link>
        </>
    )
};

export default NavLinks;