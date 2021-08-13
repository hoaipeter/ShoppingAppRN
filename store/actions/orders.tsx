import Env from '../../config/Environment';
import Order from '../../models/order';

export const ADD_ORDER = 'ADD_ORDER';
export const SET_ORDERS = 'SET_ORDERS';

export const addOrder = (
  cartItems: { productId: string; productTitle: any; productPrice: any; quantity: any; sum: any }[],
  totalAmount: any
) => {
  return async (
    dispatch: (arg0: {
      type: string;
      orderData: {
        id: any;
        items: { productId: string; productTitle: any; productPrice: any; quantity: any; sum: any }[];
        amount: any;
        date: Date;
      };
    }) => void,
    getState: () => { (): any; new (): any; auth: { (): any; new (): any; token: any; userId: any } }
  ) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    const date = new Date();
    const response = await fetch(
      `${Env.url}orders/${userId}.json?auth=${token}`, // add your own API url
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartItems,
          totalAmount,
          date: date.toISOString()
        })
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const resData = await response.json();

    dispatch({
      type: ADD_ORDER,
      orderData: {
        id: resData.name,
        items: cartItems,
        amount: totalAmount,
        date: date
      }
    });
  };
};

export const fetchOrders = () => {
  return async (
    dispatch: (arg0: { type: string; orders: Order[] }) => void,
    getState: () => { (): any; new (): any; auth: { (): any; new (): any; userId: any } }
  ) => {
    const userId = getState().auth.userId;
    try {
      const response = await fetch(`${Env.url}orders/${userId}.json`); // add your own API url
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const resData = await response.json();
      const loadedOrders = [];
      for (const key in resData) {
        loadedOrders.push(new Order(key, resData[key].cartItems, resData[key].totalAmount, new Date(resData[key].date)));
      }

      dispatch({ type: SET_ORDERS, orders: loadedOrders });
    } catch (err) {
      throw err;
    }
  };
};
