import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCompanies} from './searchAPI';

const initialState = {
    results: [],
    loading: false,
};


export const searchAsync = createAsyncThunk(
  'searchBar',
  async (query) => {
    if (query.length > 0){
      const response = await fetchCompanies(query);
      return response.data;
    }
    return [];
  }
  
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchAsync.fulfilled, (state, action) => {
        state.results = action.payload;
        state.loading = false;
      })
      .addCase(searchAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectCompanies = (state) => state.search.results;
export const selectLoading = (state) => state.search.loading;

export default searchSlice.reducer;
