import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCategories, 
  fetchLocations, 
  fetchShopsByFilters } from './categoryAPI';

const initialState = {
  status: 'idle',
  categories: [],
  CategoryID: null,
  locations: [],
  totalShops: 0,
  shops: [],
};


export const fetchCategoriesAsync = createAsyncThunk(
  'category/fetchCategory',
  async () => {
    const response = await fetchCategories();
    return response.data;
  }
)

export const fetchLocationsAsync = createAsyncThunk(
  'category/fetchLocation',
  async (category_id) => {
    const response = await fetchLocations(category_id);
    return response.data;
  }
)

export const fetchShopsByFiltersAsync = createAsyncThunk(
  'category/fetchShopByFilters',
  async ({filter, sort, pagination, category_id}) => {
    const response = await fetchShopsByFilters(filter, sort, pagination, category_id);
    return response.data;
  }
)

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      })
      .addCase(fetchLocationsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLocationsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.locations = action.payload;
      })
      .addCase(fetchShopsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchShopsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.CategoryID = action.payload.category;
        state.totalShops = action.payload.totalShops;
        state.shops = action.payload.shops;
      })
  },
});


export const selectCategoryID = (state) => state.category.CategoryID;
export const selectLocations = (state) => state.category.locations;
export const selectShopsbyCategoryID = (state) => state.category.shops;
export const selectTotalShops = (state) => state.category.totalShops;
export const selectCategoryStatus = (state) => state.category.status;


export default categorySlice.reducer;

