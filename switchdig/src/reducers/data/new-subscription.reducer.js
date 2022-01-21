import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import {
  SEARCH_AUTHOR_SUCCESS,
  SEARCH_AUTHOR_REQUEST,
  UPDATE_MEDIA_TYPE,
} from '../../actions';


const initialState = {
  author: null,
  matchedAuthor: null,
  mediaTypes: {
    print: true,
    ebook: false,
    audiobook: false,
  },
};


// Our 'author' reducer is what's sitting in the text field. It's what we use
// to request results from Amazon
const author = (state = initialState.author, action) => (
  action.type === SEARCH_AUTHOR_REQUEST
    ? action.author
    : state
);

// Our 'matchedAuthor' is the resulting author found by amazon. This is what
// will actually be persisted, since the user might've made a typo or used
// a less-common variation of the author's name.
const matchedAuthor = (state = initialState.matchedAuthor, action) => (
  action.type === SEARCH_AUTHOR_SUCCESS
    ? action.author
    : state
);

const mediaTypes = (state = initialState.mediaTypes, action) => {
  switch (action.type) {
    case UPDATE_MEDIA_TYPE:
      return { ...state, [action.id]: action.value };

    default:
      return state;
  }
};

export default combineReducers({
  author,
  matchedAuthor,
  mediaTypes,
});


// /////////////////
// SELECTORS //////
// ///////////////
export const authorSelector = state => state.data.newSubscription.author;
export const mediaTypesSelector = state => state.data.newSubscription.mediaTypes;
export const stepSelector = createSelector(
  authorSelector,
  // eslint-disable-next-line no-shadow
  author => (author ? 2 : 1)
);
