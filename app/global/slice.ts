import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null || {}
}

const slice = createSlice({
  name: "auth_slice",
  initialState,
  reducers: {
    authuser:(state:{user:{}|null},{payload}) => {
      state.user = payload;
    }
  }
});

export const {authuser} = slice.actions

export default slice.reducer