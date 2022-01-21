# 3B: Rendering stuff from the Redux store

Next, in the `Cart` component you created, we need to _select_ that state and do something with it. The initial state will depend based on how you built the component, but here's the relevant Redux part:

```diff
const Cart = () => {
+ const state = useSelector(state => state)
  return (
    <Wrapper>
      {/* Your stuff here */}
    </Wrapper>
  )
}
```

`useSelector` selects a slice of the Redux state. In this first example we're selecting _all_ of the state.

There's a problem though. We want to select the state as an _array_ of items, so that we can map through them in our React component. Right now our state is an object.

We need to specify a custom selector function, something like:

```js
const getStoreItemArray = (state) => Object.values(state);
```

It's good practice to keep selector functions _colocated_ with the reducers. So, let's move this function to the reducer file:

```diff
const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      return {
        ...state,
        [action.item.id] = {
          ...action.item,
          quantity: 1,
        }
      }
    }

    default:
      return state;
  }
}

+export const getStoreItemArray = state =>
+ Object.values(state);
```

We can then import that selector into our `Cart` component, and use it to get an array of store items:

```js
import { getStoreItemArray } from "../../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);

  return <Wrapper>{/* Your stuff here */}</Wrapper>;
};
```

At this point, you have an array full of store items. Mapping over data should be familiar territory at this point, so the instructions will leave you to it. You can consult previous workshops to see how we map over data in JSX.
