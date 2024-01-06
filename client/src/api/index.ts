import axios from 'axios';

import { FormDataProp as AuthFormData } from '../interfaces/auth';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req: any) => {
    const token = localStorage.getItem('bhu-1-derToken');
    if (token) {
        req.headers.authorization = `Bearer ${token}`;
    }
    return req;
});

export const signup = (formData: AuthFormData) => API.post('/users/signup', formData);
export const login = (formData: AuthFormData) => API.post('/users/login', formData);
export const loginWithToken = () => API.post('/users/login-with-token');