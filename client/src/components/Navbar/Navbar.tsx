import React, { useState } from 'react';
import { Menu, X } from 'react-feather';

import NavItems from './NavItems';
import NavLinks from './NavLinks';
import Logo from '../../images/main-logo.png';

const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='pl-3 pr-10 pt-3 bg-lightgrey'>
            <div className='flex items-center justify-between'>
                <a href="/">
                    <img className='h-60px' src={Logo} alt="bhu-1-der" />
                </a>
                <ul className='hidden md:flex gap-4 text-darkgrey'>
                    <NavItems />
                </ul>
                <div className='hidden md:flex gap-4'>
                    <NavLinks />
                </div>
                <div onClick={() => setShowMenu(true)} className='md:hidden p-2 cursor-pointer rounded-full hover:bg-grey'>
                    <Menu color='#333' />
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-screen bg-white shadow-medium transition-all duration-200 ${showMenu ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0 -translate-y-full'}`}>
                <div onClick={() => setShowMenu(false)} className='flex items-center justify-between pl-3 pr-10 pt-3'>
                    <img className='h-60px' src={Logo} alt="bhu-1-der" />
                    <X color='#333' size={38} className='p-2 cursor-pointer rounded-full hover:bg-lightgrey' />
                </div>
                <ul className='flex flex-col gap-3 items-center text-darkgrey px-6 pb-4'>
                    <NavItems />
                    <li className='w-full flex justify-between'>
                        <NavLinks />
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;