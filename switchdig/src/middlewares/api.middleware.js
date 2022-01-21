import {
  SEARCH_AUTHOR_REQUEST,
  UPDATE_MEDIA_TYPE,
  searchAuthorSuccess,
  searchAuthorFailure,
} from '../actions';

import { fetchFromAPI } from '../helpers/api.helpers';

// eslint-disable-next-line arrow-parens
const API = store => next => action => {
  // Always dispatch the original action
  next(action);

  // Switch on the action type, so that we can fetch additional info
  // when needed
  switch (action.type) {
    case SEARCH_AUTHOR_REQUEST: {
      const { mediaTypes } = store.getState().data.newSubscription;

      fetchFromAPI({
        resource: 'author/search',
        method: 'GET',
        data: { author: action.author, mediaTypes },
      }).then(({ author, books }) => {
        next(searchAuthorSuccess({ author, books }));
      }).catch((error) => {
        next(searchAuthorFailure(error));
      });

      return;
    }

    case UPDATE_MEDIA_TYPE: {
      const { author, mediaTypes } = store.getState().data.newSubscription;

      // If we're fiddling with the media types before selecting an author,
      // don't make the request.
      if (!author) {
        return;
      }

      fetchFromAPI({
        resource: 'author/search',
        method: 'GET',
        data: { author, mediaTypes },
      }).then(({ books }) => {
        next(searchAuthorSuccess({ author, books }));
      }).catch((error) => {
        next(searchAuthorFailure(error));
      });

      return;
    }

    default:
      // Do nothing for all other actions.
      return;
  }
};

export default API;
