/// <reference types="redux" />
import { combineReducers } from "redux";

import alert from './alert';
import auth from './auth';
import blog from './blog';
import project from './project';

export default combineReducers({ alert, auth, blog, project });