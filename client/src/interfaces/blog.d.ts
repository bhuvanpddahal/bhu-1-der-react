import { ObjectId } from 'mongodb';

export interface FormDataProp {
    title: string;
    description: string;
}

export interface State {
    isLoading: boolean;
    blogs: BlogType[];
    selectedBlog: Blog;
}

interface BlogInit {
    title: string;
    description: string;
    createdAt: string;
}

interface BlogType extends BlogInit {
    _id: ObjectId;
}

export type Blog = BlogType | null;

interface Blogs {
    blogs: BlogType[];
}

type Data = BlogType | Blogs;

export interface Action {
    type: string;
    for?: string;
    data?: Data;
}

export interface BlogProp extends BlogInit {
    id: string;
}