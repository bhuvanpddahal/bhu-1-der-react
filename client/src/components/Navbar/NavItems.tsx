import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemsProp {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    pathname: string;
}

const NavItems: React.FC<NavItemsProp> = ({ setShowMenu, pathname }: NavItemsProp) => {
    return (
        <>
            <li className={`transition-color duration-200 ${pathname === '/' ? 'text-normal' : ''} hover:text-normal`}><Link onClick={() => setShowMenu(false)} to="/">Inspiration</Link></li>
            <li className={`transition-color duration-200 ${pathname === '/projects' ? 'text-normal' : ''} hover:text-normal`}><Link onClick={() => setShowMenu(false)} to="/projects">Projects</Link></li>
            <li className={`transition-color duration-200 ${pathname === '/blog' ? 'text-normal' : ''} hover:text-normal`}><Link onClick={() => setShowMenu(false)} to="/blog">Blog</Link></li>
            <li className={`transition-color duration-200 ${pathname === '/contact' ? 'text-normal' : ''} hover:text-normal`}><Link onClick={() => setShowMenu(false)} to="/contact">Contact</Link></li>
        </>
    )
};

export default NavItems;