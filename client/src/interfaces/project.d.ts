import { ObjectId } from 'mongodb';

export interface FormDataProp {
    title: string;
    image: string;
    description: string;
}

export interface State {
    isLoading: boolean;
    fetched: boolean;
    projects: ProjectType[];
    selectedProject: Project;
    page: number;
    limit: number;
    totalPages: number;
}

interface ProjectInit {
    title: string;
    image: string;
    description: string;
    addedAt: string;
}

interface ProjectType extends ProjectInit {
    _id: ObjectId;
}

export type Project = ProjectType | null;

export interface ManyData {
    projects: ProjectType[];
    page: number;
    totalPages: number;
}

type Data = ProjectType | ManyData;

export interface Action {
    type: string;
    for?: string;
    data?: Data;
}

export interface ProjectProp extends ProjectInit {
    id: string;
}