import { ManyData } from '../interfaces/blog';
import {
    START_LOADING,
    END_LOADING
} from '../constants/action';
import {
    BLOG,
    CREATE_BLOG,
    GET_BLOGS,
    GET_MORE_BLOGS,
    GET_BLOG_BY_ID,
    REMOVE_SELECTED_BLOG
} from "../constants/blog";

const initialState = {
    blogs: [],
    selectedBlog: null,
    isLoading: false,
    fetched: false,
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
                totalPages: (action?.data as ManyData)?.totalPages,
                fetched: true
            };
        case GET_MORE_BLOGS:
            return {
                ...state,
                blogs: [...state.blogs, ...(action?.data as ManyData)?.blogs],
                page: (action?.data as ManyData)?.page,
                totalPages: (action?.data as ManyData)?.totalPages
            };
        case GET_BLOG_BY_ID:
            return { ...state, selectedBlog: action?.data };
        case REMOVE_SELECTED_BLOG:
            return { ...state, selectedBlog: null };
        default:
            return state;
    }
};

export default blogReducer;