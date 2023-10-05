// slice/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // 用户信息
  status: 'idle', // 身份验证状态
  error: null // 错误信息
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.status = 'loading';
    },
    loginSuccess: (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
      state.error = null;
    },
    loginFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.status = 'idle';
    }
  }
});

export const { loginStart, loginSuccess, loginFailed, logout } = authSlice.actions;

export default authSlice.reducer;
