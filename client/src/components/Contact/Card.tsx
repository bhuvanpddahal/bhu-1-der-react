import React from 'react';
import { Facebook, Twitter, GitHub, ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';

interface CardProp {
    name: string;
    color: string;
    text: string;
    link: string;
}

interface IconProp {
    name: string;
    color: string;
}

const className = 'shadow-medium mx-auto mt-n10px p-2 rounded-full bg-white';
const size = 45;

const Icon: React.FC<IconProp> = ({ name, color }: IconProp) => {
    if(name === 'Facebook') return <Facebook size={size} color={color} className={className} />
    else if(name === 'Twitter') return <Twitter size={size} color={color} className={className} />
    else return <GitHub size={size} color={color} className={className} />
};

const Card: React.FC<CardProp> = ({ name, color, text, link }: CardProp) => {
    return (
        <li className='shadow-large rounded-md bg-white'>
            <Icon name={name} color={color} />
            <h3 className='text-center font-semibold text-dark mt-2 mb-3 px-4'>{name}</h3>
            <p className='text-darkgrey px-4 text-center mb-3 text-15px'>{text}</p>
            <Link className='flex items-center justify-between py-3 px-4 font-medium text-dark rounded- border-t border-solid border-grey transition-bg duration-300 hover:bg-dim' to={link} target='_blank'>
                View account <ArrowRight size={22} color="#333" />
            </Link>
        </li>
    )
};

export default Card;