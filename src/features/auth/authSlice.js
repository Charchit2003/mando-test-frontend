import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  login,
  createUser,
  createSeller,
  signOut,
  checkUser,
  checkSeller,
  resetPasswordRequest,
  resetPassword,
} from './authAPI';
// import { updateUser } from '../user/userAPI';

const initialState = {
  loggedInToken: null, // this should only contain user identity => 'id'/'role'
  status: 'idle',
  error: null,
  userChecked: false,
  sellerChecked: false,
  mailSent: false,
  passwordReset:false
};

export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const createSellerAsync = createAsyncThunk(
  'user/createSeller',
  async (userData) => {
    const response = await createSeller(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const loginAsync = createAsyncThunk(
  'user/login',
  async (loginInfo, { rejectWithValue }) => {
    try {
      const response = await login(loginInfo);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const checkUserAsync = createAsyncThunk('user/checkUser', async () => {
  try {
    const response = await checkUser();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const checkSellerAsync = createAsyncThunk('user/checkSeller', async () => {
  try {
    const response = await checkSeller();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const resetPasswordRequestAsync = createAsyncThunk(
  'user/resetPasswordRequest',
  async (email,{rejectWithValue}) => {
    try {
      const response = await resetPasswordRequest(email);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const resetPasswordAsync = createAsyncThunk(
  'user/resetPassword',
  async (data,{rejectWithValue}) => {
    try {
      const response = await resetPassword(data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const signOutAsync = createAsyncThunk(
  'user/signOut',
  async () => {
    const response = await signOut();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInToken = action.payload;
      })
      .addCase(createSellerAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createSellerAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInToken = action.payload;
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInToken = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;
      })
      .addCase(signOutAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInToken = null;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInToken = action.payload;
        state.userChecked = true;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.userChecked = true;
      })
      .addCase(checkSellerAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkSellerAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInToken = action.payload;
        state.sellerChecked = true;
      })
      .addCase(checkSellerAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.sellerChecked = true;
      })
      .addCase(resetPasswordRequestAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetPasswordRequestAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.mailSent = true;
      })
      .addCase(resetPasswordAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetPasswordAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.passwordReset = true;
      })
      .addCase(resetPasswordAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload
      })
  },
});

export const selectLoggedIn = (state) => state.auth.loggedInToken;
export const selectError = (state) => state.auth.error;
export const selectUserChecked = (state) => state.auth.userChecked;
export const selectSellerChecked = (state) => state.auth.sellerChecked;
export const selectMailSent = (state) => state.auth.mailSent;
export const selectPasswordReset = (state) => state.auth.passwordReset;

// export const { } = authSlice.actions;

export default authSlice.reducer;