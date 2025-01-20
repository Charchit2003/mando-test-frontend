import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { 
  fetchExoticCollection,
  fetchShopDetailbyCategoryid,
  fetchMyShopDetail
 } from './shopAPI';

const initialState = {
  status : 'idle',
  products : [],
  totalProducts : 0,
  selectedShopID : null

};


export const fetchExoticAsync = createAsyncThunk(
  'shop/exotic',
  async (category_id, shop_id) => {
    const response = await fetchExoticCollection();
    return response.data;
  }
);

export const fetchShopDetailbyCategoryAsync = createAsyncThunk(
  'shop/shop_id',
  async (category_id, shop_id) => {
    const response = await fetchShopDetailbyCategoryid(category_id, shop_id);
    return response.data;
  }
);

export const fetchMyShopDetailAsync = createAsyncThunk(
  'shop/myshop',
  async (user_id, shop_id) => {
    const response = await fetchMyShopDetail(user_id, shop_id);
    return response.data;
  }
);

export const shopsSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExoticAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExoticAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.totalProducts = action.payload.totalProducts;
        state.products = action.payload.products;
      })
      .addCase(fetchShopDetailbyCategoryAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchShopDetailbyCategoryAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedShopID = action.payload.shop_id;
        state.totalProducts = action.payload.totalProducts;
        state.products = action.payload.products;
      })
      .addCase(fetchMyShopDetailAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMyShopDetailAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedShopID = action.payload.shop_id;
        state.totalProducts = action.payload.totalProducts;
        state.products = action.payload.products;
      });
  },
});


export const selectShopID = (state) => state.shop.selectedShopID;
export const selectProducts = (state) => state.shop.products;
export const selectTotalProducts = (state) => state.shop.totalProducts;
export const selectShopStatus = (state) => state.shop.status;

export default shopsSlice.reducer;
