import { State, Action, ManyData, ProjectType } from '../interfaces/project';
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
    REMOVE_SELECTED_PROJECT,
    EDIT_PROJECT
} from "../constants/project";

const initialState = {
    projects: [],
    selectedProject: null,
    isLoading: false,
    isMiniLoading: false,
    fetched: false,
    page: 1,
    limit: 6,
    totalPages: 1,
};

const projectReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case START_LOADING:
            if(action.for !== PROJECT) return state;
            return { ...state, isLoading: true };
        case END_LOADING:
            if(action.for !== PROJECT) return state;
            return { ...state, isLoading: false };
        case START_MINI_LOADING:
            if(action.for !== PROJECT) return state;
            return { ...state, isMiniLoading: true };
        case END_MINI_LOADING:
            if(action.for !== PROJECT) return state;
            return { ...state, isMiniLoading: false };
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
        case GET_PROJECT_BY_ID:
            return { ...state, selectedProject: action?.data };
        case REMOVE_SELECTED_PROJECT:
            return { ...state, selectedProject: null };
        case EDIT_PROJECT:
            return {
                ...state,
                projects: state.projects.map((project) => project._id.toString() === (action?.data as ProjectType)?._id?.toString() ? action?.data : project)
            };
        default:
            return state;
    }
};

export default projectReducer;