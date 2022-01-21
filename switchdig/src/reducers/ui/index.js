import { combineReducers } from 'redux';

import errors from './errors.reducer';
import requests from './requests.reducer';


export default combineReducers({ errors, requests });
