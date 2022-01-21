export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item,
});

export const removeItem = (itemId) => ({
  type: 'REMOVE_ITEM',
  itemId,
});

export const updateQuantity = (itemId, newQuantity) => ({
  type: 'UPDATE_QUANTITY',
  itemId,
  newQuantity,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
