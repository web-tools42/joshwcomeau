# Exercise 1: Initial Redux setup

Before we do anything else, we need to get some basic Redux structure in place!

Install the following NPM dependencies:

- redux
- react-redux

Create a new file, `src/reducers/index.js`. For now, our reducer won't be very interesting:

```js
const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
```

> ⚠️ Friendly reminder, you'll be much better off if you take the time to write out the snippets on this page! Copying/pasting is faster, but you'll never learn this structure if you don't take the time to write it out.

Let's use that reducer in our main index, `src/index.js`:

```diff
import React from 'react';
import ReactDOM from 'react-dom';
+import { createStore } from 'redux';
+import { Provider } from 'react-redux';

+import reducer from './reducers';
import App from './components/App';

+const store = createStore(
+  reducer,
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
+);

const rootElement = document.getElementById('root');

ReactDOM.render(
-  <App />
+  <Provider store={store}>
+    <App />
+  </Provider>,
  rootElement
);
```

To review, a few things are happening here:

- We import the reducer we just created
- We create a new Redux store with that reducer, as well as some code to enable the Redux browser devtools.
- We import `Provider` from the react-redux bindings, and pass it our new store. The `Provider` wraps around our entire application.

Finally, create 1 more new file: `src/actions.js`. For now, it can remain empty.
