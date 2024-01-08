import axios from 'axios';

import { FormDataProp as AuthFormData } from '../interfaces/auth';
import { FormDataProp as BlogFormData } from '../interfaces/blog';
import { FormDataProp as ProjectFormData } from '../interfaces/project';

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

export const createBlog = (formData: BlogFormData) => API.post('/blogs', formData);
export const getBlogs = (page: number, limit: number) => API.get(`/blogs?page=${page}&limit=${limit}`);
export const getBlogById = (id: string) => API.get(`/blogs/${id}`);

export const addProject = (formData: ProjectFormData) => API.post('/projects', formData);
export const getProjects = (page: number, limit: number) => API.get(`/projects?page=${page}&limit=${limit}`);
export const getProjectById = (id: string) => API.get(`/projects/${id}`);