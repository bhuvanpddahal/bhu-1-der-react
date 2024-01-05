import React from 'react';
import { Link } from 'react-router-dom';

import Img from '../../images/laptop-img.avif';

const Project: React.FC = () => {
    return (
        <li className='bg-white px-7 pt-7 pb-8 rounded-xl shadow-large'>
            <img className='w-full h-200px object-cover mb-3 rounded-md' src={Img} alt="" />
            <h2 className='font-semibold text-lg text-dark line-clamp-2'>Stopwatch in HTML, CSS & JavaScript. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente praesentium ipsam ad nemo velit explicabo, expedita nulla labore debitis quo.</h2>
            <p className='text-normal mt-2 mb-6 line-clamp-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, qui suscipit consectetur ipsa incidunt nostrum cumque voluptatem dolores quos libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quae optio hic, vel fugiat officiis veniam quia itaque rerum, tempore quod repudiandae enim perferendis, sequi quidem temporibus deleniti quasi? At?</p>
            <Link className='px-4 py-2 bg-primary text-white rounded-sm hover:bg-primarydark' to='/projects/123'>Read more</Link>
        </li>
    )
};

export default Project;