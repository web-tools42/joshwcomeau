const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity:
            state[action.item.id] && state[action.item.id].quantity
              ? state[action.item.id].quantity + 1
              : 1,
        },
      };
    }

    case 'UPDATE_QUANTITY': {
      const { itemId, newQuantity } = action;
      return {
        ...state,
        [itemId]: {
          ...state[itemId],
          quantity: newQuantity,
        },
      };
    }

    case 'REMOVE_ITEM': {
      const newCart = { ...state };
      delete newCart[action.itemId];
      return newCart;
    }

    case 'CLEAR_CART': {
      return initialState;
    }

    default:
      return state;
  }
}

export const getStoreItemsArray = (state) => Object.values(state);
