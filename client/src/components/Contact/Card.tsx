import React from 'react';
import { Facebook, ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';

const Card: React.FC = () => {
    return (
        <li className='shadow-large rounded-md bg-white'>
            <Facebook size={45} className='shadow-medium mx-auto mt-n10px p-2 text-secondary rounded-full bg-white' />
            <h3 className='text-center font-semibold text-dark mt-2 mb-3 px-4'>Facebook</h3>
            <p className='text-darkgrey px-4 text-center mb-3 text-15px'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam maiores eum dolore sint officiis?</p>
            <Link className='flex items-center justify-between py-3 px-4 font-medium text-dark rounded- border-t border-solid border-grey transition-bg duration-300 hover:bg-dim' to='/'>
                View account <ArrowRight size={22} color='#333' />
            </Link>
        </li>
    )
};

export default Card;