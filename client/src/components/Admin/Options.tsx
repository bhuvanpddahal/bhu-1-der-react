import React from 'react';
import { MoreVertical, Edit, Trash2 } from 'react-feather';

import { OptionsProp } from '../../interfaces/util';

const Options: React.FC<OptionsProp> = ({
    optionsRef,
    showOptions,
    toggleShowOptions,
    handleEditClick,
    handleDeleteClick
}: OptionsProp) => {
    return (
        <div onClick={toggleShowOptions} ref={optionsRef} className='relative'>
            <MoreVertical color='#333' size={36} className='p-2 cursor-pointer rounded-full transition-bg duration-300 hover:bg-lightgrey' />
            <ul className={`absolute bottom-0 right-0 py-1 w-110px bg-white text-15px rounded-lg shadow-medium overflow-hidden z-10 transition-transform duration-200 origin-bottom-right ${showOptions ? 'scale-100 pointer-events-auto' : 'scale-0 pointer-events-none'}`}>
                <li onClick={handleEditClick} className='py-1 px-3 flex items-center gap-2 cursor-pointer hover:bg-lightgrey'>
                    <Edit color='#555' size={18} /> Edit
                </li>
                <li onClick={handleDeleteClick} className='py-1 px-3 flex items-center gap-2 cursor-pointer hover:bg-lightgrey'>
                    <Trash2 color='#555' size={18} /> Delete
                </li>
            </ul>
        </div>
    )
};

export default Options;