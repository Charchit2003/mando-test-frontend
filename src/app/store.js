import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
import categoryReducer from '../features/category/categorySlice';
import productReducer from '../features/product/productSlice';
import shopReducer from '../features/shop/shopSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    shop: shopReducer,
  },
});
