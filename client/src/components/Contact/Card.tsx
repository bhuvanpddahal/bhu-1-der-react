import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, GitHub, ArrowRight } from 'react-feather';

import { initials } from '../../data/contact';
import { className, size } from '../../constants/contact';
import { CardProp, IconProp } from '../../interfaces/contact';

const Icon: React.FC<IconProp> = ({ name, color }: IconProp) => {
    if(name === 'Facebook') return <Facebook size={size} color={color} className={className} />
    else if(name === 'Twitter') return <Twitter size={size} color={color} className={className} />
    else return <GitHub size={size} color={color} className={className} />
};

const Card: React.FC<CardProp> = ({
    index,
    name,
    color,
    text,
    link
}: CardProp) => {
    return (
        <motion.li
            className='shadow-large rounded-md bg-white'
            initial={{ translateX: initials[index].translateX, translateY: initials[index].translateY, opacity: 0 }}
            animate={{ translateX: '0%', translateY: '0%', opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Icon name={name} color={color} />
            <h3 className='text-center font-semibold text-dark mt-2 mb-3 px-4'>{name}</h3>
            <p className='text-darkgrey px-4 text-center mb-3 text-15px'>{text}</p>
            <Link className='flex items-center justify-between py-3 px-4 font-medium text-dark rounded- border-t border-solid border-grey transition-bg duration-300 hover:bg-dim' to={link} target='_blank'>
                View account <ArrowRight size={22} color="#333" />
            </Link>
        </motion.li>
    )
};

export default Card;