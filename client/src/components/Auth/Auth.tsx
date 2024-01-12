import React, { useEffect, useState } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { motion } from 'framer-motion';

import Logo from '../../images/logos/main-logo.png';
import SignImg from '../../images/assets/sign.avif';
import { LOGOUT } from '../../constants/auth';
import { State } from '../../interfaces/store';
import { signup, login } from '../../actions/auth';

const Auth: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch: any = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLogin = location.pathname.includes('/login');
    document.title = `${isLogin ? 'Log In' : 'Sign Up'} | bhu-1-der`;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = {
            username,
            email,
            password
        };
        if (isLogin) {
            dispatch(login(formData, navigate));
        } else {
            dispatch(signup(formData, navigate));
        }
    };
    const handleGoogleLoginSuccess = (response: CredentialResponse) => {
        const decoded = jwtDecode(response.credential || '');
        // TODO - Login the user with Google account
    };
    const handleGoogleLoginError = () => {
        // TODO - Display error message
    };
    const handleClick = () => {
        if (isLogin) {
            navigate('/get-started');
        } else {
            navigate('/login');
        }
    };

    useEffect(() => {
        dispatch({ type: LOGOUT });
    }, []);

    const { isLoading } = useSelector((state: State) => state.auth);

    return (
        <div className='bg-lightgrey min-h-smrem md:min-h-mdrem flex items-center justify-center pt-3 pb-10 px-3'>
            <motion.div
                className='flex max-w-4xl rounded-xl overflow-hidden shadow-large'
                initial={{ translateY: '-100%', opacity: 0 }}
                animate={{ translateY: '0%', opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img className='hidden md:inline-block w-1/2 object-cover' src={SignImg} alt="" />
                <div className='w-full flex flex-col items-center pt-5 pb-7 px-7 bg-white'>
                    <img className='h-50px md:h-60px' src={Logo} alt="bhu-1-der" />
                    <h4 className='text-md font-medium text-medium mb-1'>{isLogin ? 'Welcome back!' : 'Create an acount!'}</h4>
                    <GoogleLogin
                        onSuccess={handleGoogleLoginSuccess}
                        onError={handleGoogleLoginError}
                    />
                    <p className='w-full flex items-center justify-center h-1px my-5 bg-grey'>
                        <span className='text-sm px-3 bg-white text-darkgrey'>OR {isLogin ? 'LOGIN' : 'SIGNUP'} WITH EMAIL</span>
                    </p>
                    <form onSubmit={handleSubmit} className='w-full mb-3'>
                        {!isLogin && (
                            <div className='mb-2'>
                                <label className='font-medium' htmlFor="username">Username</label>
                                <input onChange={(e) => setUsername(e.target.value)} className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none' type="text" name="username" id="username" value={username} required />
                            </div>
                        )}
                        <div className='mb-2'>
                            <label className='font-medium' htmlFor="email">Email Address</label>
                            <input onChange={(e) => setEmail(e.target.value)} className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none' type="email" name="email" id="email" value={email} required />
                        </div>
                        <div className='mb-4'>
                            <label className='font-medium' htmlFor="password">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} className='w-full border border-solid border-grey px-3 py-2 rounded-sm outline-none' type="password" name="password" id="password" value={password} required />
                        </div>
                        <button className={`w-full py-2 bg-primary text-white font-medium rounded-sm transition-bg duration-300 ${isLoading ? 'cursor-not-allowed' : 'hover:bg-primarydark'}`} type="submit" disabled={isLoading}>
                            {isLogin
                                ? isLoading ? 'Loggin in...' : 'Login'
                                : isLoading ? 'Signing up...' : 'Signup'
                            }
                        </button>
                    </form>
                    <button onClick={handleClick} className='w-full py-2 text-sm font-medium border border-solid border-grey rounded-sm transition-bg duration-300 hover:bg-lightgrey'>OR {isLogin ? 'SIGNUP' : 'LOGIN'}</button>
                </div>
            </motion.div>
        </div>
    )
};

export default Auth;