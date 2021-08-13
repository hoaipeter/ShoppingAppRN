export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const RESET_CART = 'RESET_CART';

export const addToCart = (product: any) => {
  return { type: ADD_TO_CART, product: product };
};

export const removeFromCart = (productId: string) => {
  return { type: REMOVE_FROM_CART, pid: productId };
};

export const resetCart = () => {
  return { type: RESET_CART };
};
