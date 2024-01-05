import React, { useState } from 'react';
import { Menu, X } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';

import NavItems from './NavItems';
import NavLinks from './NavLinks';
import Logo from '../../images/main-logo.png';

const Navbar: React.FC = () => {
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);
    console.log(location);
    

    return (
        <nav className='pl-3 pr-10 py-3 bg-lightgrey'>
            <div className='flex items-center justify-between'>
                <Link to="/">
                    <img className='h-60px' src={Logo} alt="bhu-1-der" />
                </Link>
                <ul className='hidden md:flex gap-4 text-darkgrey'>
                    <NavItems
                        setShowMenu={setShowMenu}
                        pathname={location.pathname}
                    />
                </ul>
                <div className='hidden md:flex gap-4'>
                    <NavLinks
                        setShowMenu={setShowMenu}
                        pathname={location.pathname}
                    />
                </div>
                <div onClick={() => setShowMenu(true)} className='md:hidden p-2 cursor-pointer rounded-full transition-bg duration-300 hover:bg-grey'>
                    <Menu color='#333' />
                </div>
            </div>
            <div className={`fixed top-0 left-0 z-10 w-screen bg-white shadow-medium transition-all duration-200 ${showMenu ? 'pointer-events-auto md:pointer-events-none opacity-100 md:opacity-0' : 'pointer-events-none opacity-0 -translate-y-full'}`}>
                <div className='flex items-center justify-between pl-3 pr-10 pt-3'>
                    <img className='h-60px' src={Logo} alt="bhu-1-der" />
                    <X onClick={() => setShowMenu(false)} color='#333' size={38} className='p-2 cursor-pointer rounded-full hover:bg-lightgrey' />
                </div>
                <ul className='flex flex-col gap-3 items-center text-darkgrey px-6 pb-4'>
                    <NavItems
                        setShowMenu={setShowMenu}
                        pathname={location.pathname}
                    />
                    <li className='w-full flex justify-between'>
                        <NavLinks
                            setShowMenu={setShowMenu}
                            pathname={location.pathname}
                        />
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;