import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'react-feather';

const Blog: React.FC = () => {
    return (
        <li className='bg-white px-7 pt-5 pb-8 rounded-xl shadow-large'>
            <h2 className='font-semibold text-lg text-dark line-clamp-2 mb-2'>How to setup VS Code? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente praesentium ipsam ad nemo velit explicabo, expedita nulla labore debitis quo.</h2>
            <p className='text-darkgrey flex items-center justify-end gap-1'>
                <Clock size={20} className='inline' />
                <span className='text-sm'>January 27, 2024</span>
            </p>
            <p className='text-normal mt-2 mb-6 line-clamp-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, qui suscipit consectetur ipsa incidunt nostrum cumque voluptatem dolores quos libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quae optio hic, vel fugiat officiis veniam quia itaque rerum, tempore quod repudiandae enim perferendis, sequi quidem temporibus deleniti quasi? At?</p>
            <Link className='px-4 py-2 bg-primary text-white rounded-sm hover:bg-primarydark' to='/blogs/123'>Read more</Link>
        </li>
    )
};

export default Blog;