import { Dispatch } from 'redux';

import * as api from '../api';
import { Action as BlogAction } from '../interfaces/blog';
import { Action as AlertAction } from '../interfaces/alert';
import {
    START_LOADING,
    END_LOADING
} from '../constants/action';
import {
    BLOG,
    CREATE_BLOG,
    creation_success
} from '../constants/blog';
import { success } from '../constants/alert';
import { FormDataProp } from '../interfaces/blog';
import { showAlert } from './alert';
import handleError from '../functions/error';

export const createBlog = (formData: FormDataProp, navigate: any) => async (dispatch: Dispatch<BlogAction | AlertAction>) => {
    try {
        dispatch({ type: START_LOADING, for: BLOG });
        const { data } = await api.createBlog(formData);
        dispatch({ type: CREATE_BLOG, data });
        dispatch({ type: END_LOADING, for: BLOG });
        showAlert(creation_success, success, dispatch);
        navigate('/blogs');
        
    } catch (error) {
        dispatch({ type: END_LOADING, for: BLOG });
        handleError(error, dispatch);
    }
};