import { State, Action } from '../interfaces/auth';
import {
    START_LOADING,
    END_LOADING
} from '../constants/action';
import {
    AUTH,
    SIGNUP,
    LOGIN,
    LOGOUT
} from '../constants/auth';

const initialState = {
    isLoading: false,
    user: null,
    token: ''
};

const authReducer = (state: State = initialState, action: Action) => {
    switch(action.type) {
        case START_LOADING:
            if(action.for !== AUTH) return state;
            return { ...state, isLoading: true };
        case END_LOADING:
            if(action.for !== AUTH) return state;
            return { ...state, isLoading: false };
        case SIGNUP:
        case LOGIN:
            localStorage.setItem('bhu-1-derToken',  action?.data?.token || '');
            return {
                ...state,
                user: action?.data?.user,
                token: action?.data?.token
            };
        case LOGOUT:
            localStorage.removeItem('bhu-1-derToken');
            return initialState;
        default:
            return state;
    }
};

export default authReducer;