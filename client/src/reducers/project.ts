import { ManyData } from '../interfaces/project';
import {
    START_LOADING,
    END_LOADING
} from '../constants/action';
import {
    PROJECT,
    ADD_PROJECT,
    GET_PROJECTS,
    GET_MORE_PROJECTS
} from "../constants/project";

const initialState = {
    projects: [],
    selectedProject: null,
    isLoading: false,
    fetched: false,
    page: 1,
    limit: 6,
    totalPages: 1,
};

const projectReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case START_LOADING:
            if(action.for !== PROJECT) return state;
            return { ...state, isLoading: true };
        case END_LOADING:
            if(action.for !== PROJECT) return state;
            return { ...state, isLoading: false };
        case ADD_PROJECT:
            return { ...state, projects: [action?.data, ...state.projects] };
        case GET_PROJECTS:
            return {
                ...state,
                projects: (action?.data as ManyData)?.projects,
                page: (action?.data as ManyData)?.page,
                totalPages: (action?.data as ManyData)?.totalPages,
                fetched: true
            };
        case GET_MORE_PROJECTS:
            return {
                ...state,
                projects: [...state.projects, ...(action?.data as ManyData)?.projects],
                page: (action?.data as ManyData)?.page,
                totalPages: (action?.data as ManyData)?.totalPages
            };
        default:
            return state;
    }
};

export default projectReducer;