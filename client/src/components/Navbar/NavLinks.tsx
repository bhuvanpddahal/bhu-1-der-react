import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../../interfaces/store';

interface NavLinksProp {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    pathname: string;
}

const NavLinks: React.FC<NavLinksProp> = ({ setShowMenu }: NavLinksProp) => {
    const { user } = useSelector((state: State) => state.auth);

    return (
        <>
            <Link onClick={() => setShowMenu(false)} to='/login' className='transition-color duration-200 text-darkgrey hover:text-normal'>Sign In</Link>
            <Link onClick={() => setShowMenu(false)} to='/get-started' className='transition-color duration-200 text-darkgrey hover:text-normal'>Get Started</Link>
        </>
    )
};

export default NavLinks;