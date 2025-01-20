import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProductDetailsbyProductid,
  createProduct,
  updateProduct
} from './productAPI';

const initialState = {
  status : 'idle',
  product : null,
  productID : null
};

export const fetchProductDetailsAsync = createAsyncThunk(
  'product/fetch',
  async (product_id) => {
    const response = await fetchProductDetailsbyProductid(product_id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const createProductAsync = createAsyncThunk(
  'product/create',
  async ({product_id, seller, user_id}) => {
    const response = await fetchProductDetailsbyProductid(product_id, seller, user_id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const updateProductAsync = createAsyncThunk(
  'product/update',
  async ({product_id, seller, user_id}) => {
    const response = await fetchProductDetailsbyProductid(product_id, seller, user_id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetailsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductDetailsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.product = action.payload.product;
        state.productID = action.payload.product_id;
      })
      .addCase(createProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.product = action.payload.product;
        state.productID = action.payload.product_id;
      })
      .addCase(updateProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.product = action.payload.product;
        state.productID = action.payload.product_id;
      });
  },
});

export const selectProduct = (state) => state.product.product;
export const selectProductID = (state) => state.product.productID;
export const selectProductStatus = (state) => state.product.status;

export default productSlice.reducer;
