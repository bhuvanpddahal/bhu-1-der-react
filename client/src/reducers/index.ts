/// <reference types="redux" />
import { combineReducers } from "redux";

import alert from './alert';
import auth from './auth';
import blog from './blog';

export default combineReducers({ alert, auth, blog });