import axios from 'axios';

import { FormDataProp as AuthFormData } from '../interfaces/auth';
import { FormDataProp as BlogFormData } from '../interfaces/blog';
import { FormDataProp as ProjectFormData } from '../interfaces/project';

axios.defaults.withCredentials = true;
const API = axios.create({ baseURL: 'https://bhu-1-der-server.vercel.app/api' });

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
export const editBlog = (id: string, formData: BlogFormData) => API.patch(`/blogs/${id}`, formData);
export const deleteBlog = (id: string) => API.delete(`/blogs/${id}`);
export const commentOnBlog = (id: string, comment: string) => API.post(`/blogs/comment/${id}`, { comment });
export const replyOnComment = (blogId: string, commentId: string, reply: string) => API.post(`/blogs/reply/${blogId}?commentId=${commentId}`, { reply });

export const addProject = (formData: ProjectFormData) => API.post('/projects', formData);
export const getProjects = (page: number, limit: number) => API.get(`/projects?page=${page}&limit=${limit}`);
export const getProjectById = (id: string) => API.get(`/projects/${id}`);
export const editProject = (id: string, formData: ProjectFormData) => API.patch(`/projects/${id}`, formData);
export const deleteProject = (id: string) => API.delete(`/projects/${id}`);