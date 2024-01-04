import React from 'react';

import Logo from '../../images/main-logo.png';

const Navbar: React.FC = () => {
    return (
        <nav>
            <img className='h-60px' src={Logo} alt="bhu-1-der" />
        </nav>
    )
};

export default Navbar;