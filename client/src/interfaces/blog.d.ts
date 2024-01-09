import { ObjectId } from 'mongodb';

export interface FormDataProp {
    title: string;
    description: string;
}

export interface State {
    isLoading: boolean;
    isMiniLoading: boolean;
    fetched: boolean;
    blogs: BlogType[];
    selectedBlog: Blog;
    page: number;
    limit: number;
    totalPages: number;
}

interface BlogInit {
    title: string;
    description: string;
    createdAt: string;
}

interface Reply {
    id: ObjectId;
    username: string;
    reply: string;
}

interface Comment {
    id: ObjectId;
    username: string;
    comment: string;
    replies: Reply[];
}

export interface BlogType extends BlogInit {
    _id: ObjectId;
    comments: Comment[];
}

export type Blog = BlogType | null;

export interface ManyData {
    blogs: BlogType[];
    page: number;
    totalPages: number;
}

type Data = string | Comment | BlogType | ManyData;

export interface Action {
    type: string;
    for?: string;
    data?: Data;
}

export interface BlogProp extends BlogInit {
    id: string;
    dispatch: any;
}

export interface CommentsProp {
    id: string;
    comments: Comment[];
}

export interface CommentProp {
    comment: Comment;
    isLast: boolean;
}