import { State as AuthState } from './auth';
import { State as AlertState } from './alert';

export interface State {
    auth: AuthState;
    alert: AlertState;
}