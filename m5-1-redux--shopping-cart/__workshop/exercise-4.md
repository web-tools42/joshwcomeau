# Exercise 4: Removing items from the cart

In Exercise 2, we added a little `x` icon to each cart item. Now we need to use it to remove items from the cart!

This is very similar to adding items, so it's left as an exercise.

**HINT:** Create a new action creator, `removeItem`, that creates an action, `REMOVE_ITEM`.

**HINT:** the `delete` operator is a _mutative_ argument, and you can't use it directly on the state. Instead you can create a new copy of the state, and delete it from that copy:

```js
const state = {
  /* immutable state object */
};
const stateCopy = { ...state }; // New object we CAN mutate
delete stateCopy[someId];
```
