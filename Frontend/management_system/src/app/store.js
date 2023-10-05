import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';
import discussionReducer from '../slice/discussionSlice'; // 引入 discussionReducer

export default configureStore({
  reducer: {
    isLoggedIn: authReducer,
    discussion: discussionReducer // 添加 discussionReducer 到 Redux store
  }
});
