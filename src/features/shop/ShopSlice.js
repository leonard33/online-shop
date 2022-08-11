import { createAsyncThunk,  createSlice } from '@reduxjs/toolkit';


export const getshopdata = createAsyncThunk(
  'shopdata/getshopdata',
  async () => {
    return fetch("https://fakestoreapi.com/products").then(res => res.json());
    //const response = await fetch("https://fakestoreapi.com/products");
    //return response.data;
  }
  
);

const shopdataSlice = createSlice({
  name: 'shopdata',
  initialState: {
    shopdata: [],
    loading: false,
    hasError: false,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  extraReducers: {
    [getshopdata.pending]: state => {
      state.loading = true;
    },
    [getshopdata.fulfilled]: (state, {payload}) => {
      state.shopdata = payload;
      state.loading = false;
      state.hasError = false;
    },
    [getshopdata.rejected]: (state) => {
      state.loading = false;
      state.hasError = true;
    }
  },
});

export const selectshopdata = state => state.shopdata;
export default shopdataSlice.reducer;

/*
export function fetchshopdata() {
  return async dispatch => {
    dispatch(getshopdata());
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(getshopdataSuccess(data));
    } catch (error) {
      dispatch(getshopdataFailure());
    }
  }
};*/
