import React from 'react';

import Logo from '../../images/main-logo.png';

const Footer = () => {
  return (
    <div className='flex items-center justify-between pl-3 pr-10'>
        <div className='flex items-center'>
            <img className='h-60px pr-4 border-r border-solid border-darkgrey' src={Logo} alt="bhu-1-der" />
            <div className='mx-4 text-normal'>Copyright © 2024 bhu-1-der.com</div>
        </div>
        <div className='text-darkgrey'>
            Facebook
        </div>
    </div>
  )
}

export default Footer;