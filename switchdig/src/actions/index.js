// Action Types
export const SEARCH_AUTHOR_INPUT = 'SEARCH_AUTHOR_INPUT';
export const SEARCH_AUTHOR_REQUEST = 'SEARCH_AUTHOR_REQUEST';
export const SEARCH_AUTHOR_SUCCESS = 'SEARCH_AUTHOR_SUCCESS';
export const SEARCH_AUTHOR_FAILURE = 'SEARCH_AUTHOR_FAILURE';
export const UPDATE_MEDIA_TYPE = 'UPDATE_MEDIA_TYPE';


// Action Creators
export const searchAuthorInput = () => ({
  type: SEARCH_AUTHOR_INPUT,
});

export const searchAuthorRequest = ({ author }) => ({
  type: SEARCH_AUTHOR_REQUEST,
  author,
});

export const searchAuthorSuccess = ({ author, books }) => ({
  type: SEARCH_AUTHOR_SUCCESS,
  author,
  books,
});

export const searchAuthorFailure = ({ error }) => ({
  type: SEARCH_AUTHOR_FAILURE,
  error,
});

export const updateMediaType = ({ id, value }) => ({
  type: UPDATE_MEDIA_TYPE,
  id,
  value,
});
