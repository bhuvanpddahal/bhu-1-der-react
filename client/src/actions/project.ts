import { Dispatch } from 'redux';

import * as api from '../api';
import { Action as ProjectAction } from '../interfaces/project';
import { Action as AlertAction } from '../interfaces/alert';
import {
    START_LOADING,
    END_LOADING,
    START_MINI_LOADING,
    END_MINI_LOADING
} from '../constants/action';
import {
    PROJECT,
    ADD_PROJECT,
    GET_PROJECTS,
    GET_MORE_PROJECTS,
    GET_PROJECT_BY_ID,
    EDIT_PROJECT,
    DELETE_PROJECT,
    addition_success,
    edition_success,
    deletion_success
} from '../constants/project';
import { success } from '../constants/alert';
import { FormDataProp } from '../interfaces/project';
import { showAlert } from './alert';
import handleError from '../functions/error';

export const addProject = (formData: FormDataProp, navigate: any) => async (dispatch: Dispatch<ProjectAction | AlertAction>) => {
    try {
        dispatch({ type: START_MINI_LOADING, for: PROJECT });
        const { data } = await api.addProject(formData);
        dispatch({ type: ADD_PROJECT, data });
        dispatch({ type: END_MINI_LOADING, for: PROJECT });
        showAlert(addition_success, success, dispatch);
        navigate('/projects');
        
    } catch (error) {
        dispatch({ type: END_MINI_LOADING, for: PROJECT });
        handleError(error, dispatch);
    }
};

export const getProjects = (page: number, limit: number) => async (dispatch: Dispatch<ProjectAction | AlertAction>) => {
    try {
        dispatch({ type: START_LOADING, for: PROJECT });
        const { data } = await api.getProjects(page, limit);
        dispatch({ type: GET_PROJECTS, data });
        dispatch({ type: END_LOADING, for: PROJECT });
        
    } catch (error) {
        dispatch({ type: END_LOADING, for: PROJECT });
        handleError(error, dispatch);
    }
};

export const getMoreProjects = (page: number, limit: number) => async (dispatch: Dispatch<ProjectAction | AlertAction>) => {
    try {
        const { data } = await api.getProjects(page, limit);
        dispatch({ type: GET_MORE_PROJECTS, data });
        
    } catch (error) {
        handleError(error, dispatch);
    }
};

export const getProjectById = (id: string) => async (dispatch: Dispatch<ProjectAction | AlertAction>) => {
    try {
        dispatch({ type: START_LOADING, for: PROJECT });
        const { data } = await api.getProjectById(id);
        dispatch({ type: GET_PROJECT_BY_ID, data });
        dispatch({ type: END_LOADING, for: PROJECT });
        
    } catch (error) {
        dispatch({ type: END_LOADING, for: PROJECT });
        handleError(error, dispatch);
    }
};

export const editProject = (id: string, formData: FormDataProp, navigate: any) => async (dispatch: Dispatch<ProjectAction | AlertAction>) => {
    try {
        dispatch({ type: START_MINI_LOADING, for: PROJECT });
        const { data } = await api.editProject(id, formData);
        dispatch({ type: EDIT_PROJECT, data });
        dispatch({ type: END_MINI_LOADING, for: PROJECT });
        showAlert(edition_success, success, dispatch);
        navigate('/projects');
        
    } catch (error) {
        dispatch({ type: END_MINI_LOADING, for: PROJECT });
        handleError(error, dispatch);
    }
};

export const deleteProject = (id: string) => async (dispatch: Dispatch<ProjectAction | AlertAction>) => {
    try {
        dispatch({ type: START_MINI_LOADING, for: PROJECT });
        await api.deleteProject(id);
        dispatch({ type: DELETE_PROJECT, data: id });
        dispatch({ type: END_MINI_LOADING, for: PROJECT });
        showAlert(deletion_success, success, dispatch);
        
    } catch (error) {
        dispatch({ type: END_MINI_LOADING, for: PROJECT });
        handleError(error, dispatch);
    }
};