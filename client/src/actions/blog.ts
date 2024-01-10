import { Dispatch } from 'redux';

import * as api from '../api';
import { Action as BlogAction } from '../interfaces/blog';
import { Action as AlertAction } from '../interfaces/alert';
import {
    START_LOADING,
    END_LOADING,
    START_MINI_LOADING,
    END_MINI_LOADING
} from '../constants/action';
import {
    BLOG,
    CREATE_BLOG,
    GET_BLOGS,
    GET_MORE_BLOGS,
    GET_BLOG_BY_ID,
    EDIT_BLOG,
    DELETE_BLOG,
    COMMENT_ON_BLOG,
    REPLY_ON_COMMENT,
    creation_success,
    edition_success,
    deletion_success,
    comment_success
} from '../constants/blog';
import { success } from '../constants/alert';
import { FormDataProp } from '../interfaces/blog';
import { showAlert } from './alert';
import handleError from '../functions/error';

export const createBlog = (formData: FormDataProp, navigate: any) => async (dispatch: Dispatch<BlogAction | AlertAction>) => {
    try {
        dispatch({ type: START_MINI_LOADING, for: BLOG });
        const { data } = await api.createBlog(formData);
        dispatch({ type: CREATE_BLOG, data });
        dispatch({ type: END_MINI_LOADING, for: BLOG });
        showAlert(creation_success, success, dispatch);
        navigate('/blogs');
        
    } catch (error) {
        dispatch({ type: END_MINI_LOADING, for: BLOG });
        handleError(error, dispatch);
    }
};

export const getBlogs = (page: number, limit: number) => async (dispatch: Dispatch<BlogAction | AlertAction>) => {
    try {
        dispatch({ type: START_LOADING, for: BLOG });
        const { data } = await api.getBlogs(page, limit);
        dispatch({ type: GET_BLOGS, data });
        dispatch({ type: END_LOADING, for: BLOG });
        
    } catch (error) {
        dispatch({ type: END_LOADING, for: BLOG });
        handleError(error, dispatch);
    }
};

export const getMoreBlogs = (page: number, limit: number) => async (dispatch: Dispatch<BlogAction | AlertAction>) => {
    try {
        const { data } = await api.getBlogs(page, limit);
        dispatch({ type: GET_MORE_BLOGS, data });
        
    } catch (error) {
        handleError(error, dispatch);
    }
};

export const getBlogById = (id: string) => async (dispatch: Dispatch<BlogAction | AlertAction>) => {
    try {
        dispatch({ type: START_LOADING, for: BLOG });
        const { data } = await api.getBlogById(id);
        dispatch({ type: GET_BLOG_BY_ID, data });
        dispatch({ type: END_LOADING, for: BLOG });
        
    } catch (error) {
        dispatch({ type: END_LOADING, for: BLOG });
        handleError(error, dispatch);
    }
};

export const editBlog = (id: string, formData: FormDataProp, navigate: any) => async (dispatch: Dispatch<BlogAction | AlertAction>) => {
    try {
        dispatch({ type: START_MINI_LOADING, for: BLOG });
        const { data } = await api.editBlog(id, formData);
        dispatch({ type: EDIT_BLOG, data });
        dispatch({ type: END_MINI_LOADING, for: BLOG });
        showAlert(edition_success, success, dispatch);
        navigate('/blogs');
        
    } catch (error) {
        dispatch({ type: END_MINI_LOADING, for: BLOG });
        handleError(error, dispatch);
    }
};

export const deleteBlog = (id: string) => async (dispatch: Dispatch<BlogAction | AlertAction>) => {
    try {
        dispatch({ type: START_MINI_LOADING, for: BLOG });
        await api.deleteBlog(id);
        dispatch({ type: DELETE_BLOG, data: id });
        dispatch({ type: END_MINI_LOADING, for: BLOG });
        showAlert(deletion_success, success, dispatch);
        
    } catch (error) {
        dispatch({ type: END_MINI_LOADING, for: BLOG });
        handleError(error, dispatch);
    }
};

export const commentOnBlog = (id: string, comment: string, setComment: React.Dispatch<React.SetStateAction<string>>) => async (dispatch: Dispatch<BlogAction | AlertAction>) => {
    try {
        dispatch({ type: START_MINI_LOADING, for: BLOG });
        const { data } = await api.commentOnBlog(id, comment);
        dispatch({ type: COMMENT_ON_BLOG, data });
        dispatch({ type: END_MINI_LOADING, for: BLOG });
        showAlert(comment_success, success, dispatch);
        setComment('');
        
    } catch (error) {
        dispatch({ type: END_MINI_LOADING, for: BLOG });
        handleError(error, dispatch);
    }
};

export const replyOnComment = (blogId: string, commentId: string, reply: string, setReply: React.Dispatch<React.SetStateAction<string>>) => async (dispatch: Dispatch<BlogAction | AlertAction>) => {
    try {
        dispatch({ type: START_MINI_LOADING, for: BLOG });
        const { data } = await api.replyOnComment(blogId, commentId, reply);
        dispatch({ type: REPLY_ON_COMMENT, data: { commentId, reply: data } });
        dispatch({ type: END_MINI_LOADING, for: BLOG });
        setReply('');
        
    } catch (error) {
        dispatch({ type: END_MINI_LOADING, for: BLOG });
        handleError(error, dispatch);
    }
};