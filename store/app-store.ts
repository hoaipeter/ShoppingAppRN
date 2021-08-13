import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';
import ordersReducer from './reducers/orders';
import authReducer from './reducers/auth';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['items', 'totalAmount'],
  blacklist: ['orders', 'availableProducts', 'userProducts']
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: persistReducer(persistConfig, cartReducer),
  orders: ordersReducer,
  auth: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);
