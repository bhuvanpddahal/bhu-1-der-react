import {
    START_LOADING,
    END_LOADING
} from '../constants/action';
import {
    BLOG,
    CREATE_BLOG
} from "../constants/blog";

const initialState = {
    blogs: [],
    selectedBlog: null,
    isLoading: false
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
        default:
            return state;
    }
};

export default blogReducer;