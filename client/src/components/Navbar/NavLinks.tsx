import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinksProp {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    pathname: string;
}

const NavLinks: React.FC<NavLinksProp> = ({ setShowMenu }: NavLinksProp) => {
    return (
        <>
            <Link onClick={() => setShowMenu(false)} to='/login' className='transition-color duration-200 text-darkgrey hover:text-normal'>Sign In</Link>
            <Link onClick={() => setShowMenu(false)} to='/get-started' className='transition-color duration-200 text-darkgrey hover:text-normal'>Get Started</Link>
        </>
    )
};

export default NavLinks;