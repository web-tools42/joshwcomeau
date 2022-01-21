import { combineReducers } from 'redux';

import newSubscription from './new-subscription.reducer';
import sampleBooks from './sample-books.reducer';


export default combineReducers({
  newSubscription,
  sampleBooks,
});
