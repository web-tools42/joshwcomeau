// State management is tackled with a minimal version of Redux.
// There's one global state object, and it can only be updated through a
// dispatcher.
export function createStore(reducer, initialState) {
  let currentState = initialState;
  const listeners = [];

  const store = {
    getState() {
      return currentState;
    },

    subscribe(fn) {
      listeners.push(fn);
    },

    dispatch(action) {
      currentState = reducer(currentState, action);

      listeners.forEach(listener => listener());

      return action;
    },
  };

  store.dispatch({ type: '@@REDUX/INIT' });

  return store;
}

export function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);

  return function combination(state = {}, action) {
    return reducerKeys.reduce((nextState, reducerKey) => ({
      ...nextState,
      [reducerKey]: reducers[reducerKey](state[reducerKey], action),
    }), {})
  };
}
