import React from 'react';
import { Link } from 'react-router-dom';

import { User } from '../../interfaces/auth';
import { admin } from '../../constants/util';

interface NavItemsProp {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    pathname: string;
    user: User;
}

const NavItems: React.FC<NavItemsProp> = ({ setShowMenu, pathname, user }: NavItemsProp) => {
    return (
        <>
            <li className={`transition-color duration-200 ${pathname.includes('/introduction') ? 'text-normal' : ''} hover:text-normal`}><Link onClick={() => setShowMenu(false)} to="/introduction">Introduction</Link></li>
            {user?.type === admin && (
                <li className={`transition-color duration-200 ${pathname.includes('/admin') ? 'text-normal' : ''} hover:text-normal`}><Link onClick={() => setShowMenu(false)} to="/admin">Admin</Link></li>
            )}
            <li className={`transition-color duration-200 ${pathname.includes('/projects') ? 'text-normal' : ''} hover:text-normal`}><Link onClick={() => setShowMenu(false)} to="/projects">Projects</Link></li>
            <li className={`transition-color duration-200 ${pathname.includes('/blogs') ? 'text-normal' : ''} hover:text-normal`}><Link onClick={() => setShowMenu(false)} to="/blogs">Blogs</Link></li>
            <li className={`transition-color duration-200 ${pathname.includes('/contact') ? 'text-normal' : ''} hover:text-normal`}><Link onClick={() => setShowMenu(false)} to="/contact">Contact</Link></li>
        </>
    )
};

export default NavItems;