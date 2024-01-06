import React from 'react';
import { Link } from 'react-router-dom';

import { User } from '../../interfaces/auth';

interface NavItemsProp {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    pathname: string;
    user: User;
}

const NavItems: React.FC<NavItemsProp> = ({ setShowMenu, pathname, user }: NavItemsProp) => {
    const admin = 'admin';

    return (
        <>
            <li className={`transition-color duration-200 ${pathname === '/' ? 'text-normal' : ''} hover:text-normal`}><Link onClick={() => setShowMenu(false)} to="/">Introduction</Link></li>
            {user?.type === admin && (
                <li className={`transition-color duration-200 ${pathname === '/admin' ? 'text-normal' : ''} hover:text-normal`}><Link onClick={() => setShowMenu(false)} to="/admin">Admin</Link></li>
            )}
            <li className={`transition-color duration-200 ${pathname === '/projects' ? 'text-normal' : ''} hover:text-normal`}><Link onClick={() => setShowMenu(false)} to="/projects">Projects</Link></li>
            <li className={`transition-color duration-200 ${pathname === '/blogs' ? 'text-normal' : ''} hover:text-normal`}><Link onClick={() => setShowMenu(false)} to="/blogs">Blogs</Link></li>
            <li className={`transition-color duration-200 ${pathname === '/contact' ? 'text-normal' : ''} hover:text-normal`}><Link onClick={() => setShowMenu(false)} to="/contact">Contact</Link></li>
        </>
    )
};

export default NavItems;