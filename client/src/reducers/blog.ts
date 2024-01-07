import { ManyData } from '../interfaces/blog';
import {
    START_LOADING,
    END_LOADING
} from '../constants/action';
import {
    BLOG,
    CREATE_BLOG,
    GET_BLOGS,
    GET_MORE_BLOGS
} from "../constants/blog";
import { RESET_PAGE } from '../constants/util';

const initialState = {
    blogs: [],
    selectedBlog: null,
    isLoading: false,
    page: 1,
    limit: 6,
    totalPages: 1,
};

const blogReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case START_LOADING:
            if(action.for !== BLOG) return state;
            return { ...state, isLoading: true };
        case END_LOADING:
            if(action.for !== BLOG) return state;
            return { ...state, isLoading: false };
        case CREATE_BLOG:
            return { ...state, blogs: [action?.data, ...state.blogs] };
        case GET_BLOGS:
            return {
                ...state,
                blogs: (action?.data as ManyData)?.blogs,
                page: (action?.data as ManyData)?.page,
                totalPages: (action?.data as ManyData)?.totalPages
            };
        case GET_MORE_BLOGS:
            return {
                ...state,
                blogs: [...state.blogs, ...(action?.data as ManyData)?.blogs],
                page: (action?.data as ManyData)?.page,
                totalPages: (action?.data as ManyData)?.totalPages
            };
        case RESET_PAGE:
            if(action.for !== BLOG) return state;
            return { ...state, events: [], page: 1, totalPages: 1 };
        default:
            return state;
    }
};

export default blogReducer;