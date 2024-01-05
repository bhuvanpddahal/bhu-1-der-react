import React from 'react';

import Logo from '../../images/main-logo.png';
import LoginImg from '../../images/login.avif';

const Auth: React.FC = () => {
    return (
        <div className='bg-lightgrey min-h-rem flex items-center justify-center pt-3 pb-10 px-3'>
            <div className='flex max-w-4xl rounded-xl overflow-hidden shadow-large'>
                <img className='hidden md:inline-block w-1/2 object-cover' src={LoginImg} alt="" />
                <div className='w-full flex flex-col items-center pt-3 pb-5 px-5 bg-white'>
                    <img className='h-60px' src={Logo} alt="bhu-1-der" />
                    <h4 className='text-md font-semibold text-normal'>Welcome back!</h4>
                    <button className='px-3 py-1 border border-solid border-darkgrey rounded-md mt-2 mb-1'>Login with Google</button>
                    <p className='w-full flex items-center justify-center h-1px my-5 bg-grey'>
                        <span className='text-sm px-3 bg-white text-darkgrey'>OR SIGN UP WITH EMAIL</span>
                    </p>
                    <form className='w-full mb-2'>
                        <div className='mb-2'>
                            <label className='font-medium' htmlFor="username">Username</label>
                            <input className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none' type="text" name="username" id="username" />
                        </div>
                        <div className='mb-2'>
                            <label className='font-medium' htmlFor="email">Email Address</label>
                            <input className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none' type="email" name="email" id="email" />
                        </div>
                        <div className='mb-3'>
                            <label className='font-medium' htmlFor="password">Password</label>
                            <input className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none' type="password" name="password" id="password" />
                        </div>
                        <button className='w-full py-2 bg-primary text-white font-medium rounded-sm hover:bg-primarydark' type="submit">Login</button>
                    </form>
                    <button className='w-full py-2 text-sm font-medium border border-solid border-grey rounded-sm hover:bg-lightgrey'>OR SIGNUP</button>
                </div>
            </div>
        </div>
    )
};

export default Auth;