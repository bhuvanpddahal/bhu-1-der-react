import { ObjectId } from 'mongodb';

export interface FormDataProp {
    username: string;
    email: string;
    password: string;
}

export interface State {
    isLoading: boolean;
    user: User;
    token: string;
}

interface UserType {
    _id: ObjectId;
    username: string;
    email: string;
    password: string;
    type: string;
    pictureIndex: number;
    joinedAt: string;
}

export type User = UserType | null;

interface Data {
    user?: UserType;
    token?: string;
}

export interface Action {
    type: string;
    for?: string;
    data?: Data;
}