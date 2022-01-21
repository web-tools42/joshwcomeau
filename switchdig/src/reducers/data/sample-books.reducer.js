import {
  SEARCH_AUTHOR_REQUEST,
  SEARCH_AUTHOR_SUCCESS,
} from '../../actions';

export default function sampleBooks(state = [], action) {
  switch (action.type) {
    case SEARCH_AUTHOR_REQUEST:
      return [];
    case SEARCH_AUTHOR_SUCCESS:
      return action.books;
    default:
      return state;
  }
}
