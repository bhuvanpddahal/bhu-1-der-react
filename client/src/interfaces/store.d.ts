import { State as AlertState } from './alert';
import { State as AuthState } from './auth';
import { State as BlogState } from './blog';
import { State as ProjectState } from './project';

export interface State {
    alert: AlertState;
    auth: AuthState;
    blog: BlogState;
    project: ProjectState;
}