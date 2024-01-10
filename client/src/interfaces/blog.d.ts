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
    userId: ObjectId;
    username: string;
    reply: string;
}

interface Comment {
    _id: ObjectId;
    userId: ObjectId;
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

export interface ReplyOnComment {
    commentId: string;
    reply: Reply;
}

type Data = string | Comment | ReplyOnComment | BlogType | ManyData;

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
    blogId: string;
    comment: Comment;
    isMiniLoading: boolean;
    dispatch: any;
    isLast: boolean;
}

export interface CommentInputProp {
    isMiniLoading: boolean;
    type: string;
    state: string;
    setter: React.Dispatch<React.SetStateAction<string>>;
    handler: () => void;
}