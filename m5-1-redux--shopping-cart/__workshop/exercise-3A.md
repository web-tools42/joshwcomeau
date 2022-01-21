# 3A: Getting state into the redux store

Inside the empty `actions.js` file, let's add our first **action creator**:

```diff
+export const addItem = item => ({
+  type: 'ADD_ITEM',
+  item,
+});
```

This is the action we'll dispatch when the user clicks "Add to cart".

Inside `StoreItem.js`, let's wire it up to dispatch this action.

```diff
import React from 'react';
+import { useDispatch } from 'react-redux';
import styled from 'styled-components';

+import { addItem } from '../../actions';

import Button from '../Button';

const StoreItem = ({ id, title, src, price }) => {
+ const dispatch = useDispatch();

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={src} alt={`${title} sticker`} />
      </ImageWrapper>
      <Title>{title}</Title>
-     <Button>Add to Cart</Button>
+     <Button
+       onClick={() =>
+         dispatch(addItem({ id, title, price }))
+       }
+     >
+       Add to Cart
+     </Button>
    </Wrapper>
  );
};
```

`dispatch` is a function we get from the `useDispatch` Redux hook. We call this when we want to _tell redux that something happened_.

When the user clicks the button, we create the `ADD_ITEM` action with the `addItem` function, and dispatch it to the store.

Next, we need to update our reducer to handle this action. Remember, _actions describe a change_, but they aren't opinionated about what should happen as a result.

Add this to our `reducer/index.js` file:

```diff
const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
+   case 'ADD_ITEM': {
+     return {
+       ...state,
+       [action.item.id]: {
+         ...action.item,
+         quantity: 1,
+       }
+     }
+   }

    default:
      return state;
  }
}
```

When we receive the `ADD_ITEM` action, we produce a new copy of the state, with an added item.

All the `...` might be confusing, so to clarify: Redux works with _immutable state_. That means we aren't allowed to mutate the state object, we have to produce a brand new object.

We can imagine the following transformations:

```
Our initial state: {}

We dispatch an action that looks like this:
{ type: 'ADD_ITEM', item: { id: 'a', price: 100 } }

Our state now looks like:
{
  a: {
    id: 'a',
    price: 100,
    quantity: 1,
  }
}

Next, we dispatch this action:
{ type: 'ADD_ITEM', item: { id: 'b', price: 200 } }

This produces a new state object:
{
  a: {
    id: 'a',
    price: 100,
    quantity: 1,
  },
  b: {
    id: 'b',
    price: 200,
    quantity: 1,
  },
}
```

**Verify that this works** using the Redux devtools. Whenever you click "Add to Cart", you should see the update reflected:

![Redux Devtools showing the effects of adding to cart](../__lecture/assets/cart-devtools.gif)
