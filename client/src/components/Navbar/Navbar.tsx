import React from 'react';

import Logo from '../../images/main-logo.png';

const Navbar: React.FC = () => {
    return (
        <nav className='flex items-center justify-between pl-3 pr-10 pt-3 bg-lightgrey'>
            <img className='h-60px' src={Logo} alt="bhu-1-der" />
            <ul className='flex gap-4 text-darkgrey'>
                <li className='hover:text-normal'><a href="/">Examples</a></li>
                <li className='hover:text-normal'><a href="/">Inspiration</a></li>
                <li className='hover:text-normal'><a href="/">Pricing</a></li>
                <li className='hover:text-normal'><a href="/">Blog</a></li>
            </ul>
            <div className='flex gap-4'>
                <button className='text-darkgrey hover:text-normal'>Sign In</button>
                <button className='text-darkgrey hover:text-normal'>Get Started</button>
            </div>
        </nav>
    )
};

export default Navbar;