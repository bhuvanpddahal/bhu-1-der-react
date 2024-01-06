import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link onClick={() => setShowMenu(false)} to={`${user ? '/' : '/get-started'}`} className={`transition-color duration-200 ${user ? 'text-primary hover:text-primarydark' : pathname === '/get-started' ? 'text-normal' : 'text-darkgrey hover:text-normal'}`}>{user ? user?.username : 'Get Started'}</Link>
        </>
    )
};

export default NavLinks;