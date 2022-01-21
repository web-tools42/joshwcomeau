import { combineReducers } from 'redux';

import { IDLE, LOADING, RESOLVED, FAILED } from '../../constants/statuses';
import {
  SEARCH_AUTHOR_INPUT,
  SEARCH_AUTHOR_SUCCESS,
  SEARCH_AUTHOR_FAILURE,
} from '../../actions';


// TODO: Generalize this reducer so new ones can be created easily.
const searchAuthorStatus = (state = IDLE, action) => {
  switch (action.type) {
    case SEARCH_AUTHOR_INPUT: return LOADING;
    case SEARCH_AUTHOR_SUCCESS: return RESOLVED;
    case SEARCH_AUTHOR_FAILURE: return FAILED;
    default: return state;
  }
};

export default combineReducers({
  searchAuthorStatus,
});
