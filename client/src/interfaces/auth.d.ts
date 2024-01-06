import { ObjectId } from 'mongodb';

export interface FormDataProp {
    username: string;
    email: string;
    password: string;
}

export interface State {
    isLoading: boolean;
    user: User | null;
    token: string;
}

interface User {
    _id: ObjectId;
    username: string;
    email: string;
    password: string;
    joinedAt: string;
}

interface ManyData {
    user?: User;
    token?: string;
}

export interface Action {
    type: string;
    for?: string;
    data?: ManyData;
}