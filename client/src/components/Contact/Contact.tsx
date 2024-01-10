import React from 'react';

import Card from './Card';
import { cards } from '../../data/contact';

const Contact: React.FC = () => {
    document.title = 'Contact | bhu-1-der';
    
    return (
        <div className='bg-lightgrey min-h-rem flex justify-center pt-3 pb-7 px-3'>
            <div className='max-w-4xl w-full'>
                <h3 className='text-2xl font-medium text-center text-dark mb-1 mt-n10px'>Contact</h3>
                <p className='text-center mb-5 text-normal font-medium'>Feel free to contact me!</p>
                <ul className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-5'>
                    {cards.map((card) => (
                        <Card
                            key={card.name}
                            name={card.name}
                            color={card.color}
                            text={card.text}
                            link={card.link}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default Contact;