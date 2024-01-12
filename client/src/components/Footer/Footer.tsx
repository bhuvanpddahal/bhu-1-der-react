import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, GitHub } from 'react-feather';

import Logo from '../../images/logos/main-logo.png';

const Footer: React.FC = () => {
    return (
        <div className='flex flex-col sm:flex-row items-center justify-between pl-3 pr-10 pb-3 sm:pb-0 shadow-medium overflow-hidden'>
            <motion.div
                className='flex items-center'
                initial={{ translateY: '100%', opacity: 0 }}
                whileInView={{ translateY: '0%', opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img className='h-50px md:h-60px pr-4 sm:border-r sm:border-solid sm:border-darkgrey' src={Logo} alt="bhu-1-der" />
                <div className='mx-4 text-15px sm:text-16px text-normal'>Copyright © 2024 bhu-1-der.com</div>
            </motion.div>
            <motion.div
                className='text-darkgrey flex gap-3'
                initial={{ translateY: '100%', opacity: 0 }}
                whileInView={{ translateY: '0%', opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Link className='transition-color duration-200 hover:text-normal' to='https://www.facebook.com' target='_blank'>
                    <Facebook className='h-21px sm:h-24px w-21px sm:w-24px' />
                </Link>
                <Link className='transition-color duration-200 hover:text-normal' to='https://www.twitter.com' target='_blank'>
                    <Twitter className='h-21px sm:h-24px w-21px sm:w-24px' />
                </Link>
                <Link className='transition-color duration-200 hover:text-normal' to='https://www.github.com' target='_blank'>
                    <GitHub className='h-21px sm:h-24px w-21px sm:w-24px' />
                </Link>
            </motion.div>
        </div>
    )
};

export default Footer;