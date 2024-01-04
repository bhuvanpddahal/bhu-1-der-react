import React from 'react';

const NavItems: React.FC = () => {
    return (
        <>
            <li className='hover:text-normal'><a href="/">Examples</a></li>
            <li className='hover:text-normal'><a href="/">Inspiration</a></li>
            <li className='hover:text-normal'><a href="/">Pricing</a></li>
            <li className='hover:text-normal'><a href="/">Blog</a></li>
        </>
    )
};

export default NavItems;