import { State as AlertState } from './alert';
import { State as AuthState } from './auth';
import { State as BlogState } from './blog';

export interface State {
    alert: AlertState;
    auth: AuthState;
    blog: BlogState;
}