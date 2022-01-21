import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import apiMiddleware from '../middlewares/api.middleware';
import DevTools from '../components/DevTools';


export default function configureStore() {
  const middlewares = [apiMiddleware];
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      DevTools.instrument()
    )
  );

  // Allow direct access to the store, for debugging/testing
  window.store = store;

  return store;
}
