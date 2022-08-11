import { configureStore } from '@reduxjs/toolkit';
import shopdataReducer from '../features/shop/ShopSlice';
import cartSliceReducer from '../features/shop/CartSlice';

export default configureStore({
  reducer: {
    shop: shopdataReducer,
    cart : cartSliceReducer,
  },
});
