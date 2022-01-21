import { combineReducers } from 'redux';

import {
  SEARCH_AUTHOR_INPUT,
  SEARCH_AUTHOR_FAILURE,
} from '../../actions';

const initialState = {
  searchAuthor: {},
};


const searchAuthor = (state = initialState.searchAuthor, action) => {
  switch (action.type) {
    case SEARCH_AUTHOR_INPUT: return {};
    case SEARCH_AUTHOR_FAILURE: return action.error;
    default: return state;
  }
};


export default combineReducers({
  searchAuthor,
});
