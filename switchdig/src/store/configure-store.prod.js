import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers';
import apiMiddleware from '../middlewares/api.middleware';


export default function configureStore() {
  const middlewares = [apiMiddleware];
  const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
  );

  return store;
}
