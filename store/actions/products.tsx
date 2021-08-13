import Product from '../../models/product';
import Env from '../../config/Environment';

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const createProduct = (title: any, price: number) => {
  return async (
    dispatch: (arg0: { type: string; productData: { id: any; title: any; price: number; ownerId: any } }) => void,
    getState: () => { (): any; new (): any; auth: { (): any; new (): any; token: any; userId: any } }
  ) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    const response = await fetch(`${Env.url}products.json?auth=${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        price,
        ownerId: userId
      })
    });
    const resData = await response.json();

    dispatch({
      type: CREATE_PRODUCT,
      productData: {
        id: resData.name,
        title: title,
        price: price,
        ownerId: userId
      }
    });
  };
};

export const fetchProducts = () => {
  return async (
    dispatch: (arg0: { type: string; products: Product[]; userProducts: Product[] }) => void,
    getState: () => { (): any; new (): any; auth: { (): any; new (): any; userId: any } }
  ) => {
    const userId = getState().auth.userId;
    try {
      const response = await fetch(`${Env.url}products.json`);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const resData = await response.json();
      // console.log('fetch resData', resData);
      const loadedProducts = [];

      for (const key in resData) {
        loadedProducts.push(new Product(key, resData[key].ownerId, resData[key].title, resData[key].price));
      }
      dispatch({
        type: SET_PRODUCTS,
        products: loadedProducts,
        userProducts: loadedProducts.filter(prod => prod.ownerId === userId)
      });
    } catch (error) {
      throw error;
    }
  };
};

export const updateProduct = (id: any, title: any, price: any) => {
  return async (
    dispatch: (arg0: { type: string; pid: any; productData: { title: any; price: any } }) => void,
    getState: () => { (): any; new (): any; auth: { (): any; new (): any; token: any } }
  ) => {
    const token = getState().auth.token;
    const response = await fetch(`${Env.url}products/${id}.json?auth=${token}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, price })
    });

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    dispatch({
      type: UPDATE_PRODUCT,
      pid: id,
      productData: { title, price }
    });
  };
};

export const deleteProduct = (productId: any) => {
  return async (
    dispatch: (arg0: { type: string; pid: any }) => void,
    getState: () => { (): any; new (): any; auth: { (): any; new (): any; token: any } }
  ) => {
    const token = getState().auth.token;
    const response = await fetch(`${Env.url}products/${productId}.json?auth=${token}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    dispatch({
      type: DELETE_PRODUCT,
      pid: productId
    });
  };
};
