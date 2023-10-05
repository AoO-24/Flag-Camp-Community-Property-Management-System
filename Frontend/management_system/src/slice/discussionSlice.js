// discussionSlice.js

import { createSlice } from '@reduxjs/toolkit';

// 初始状态
const initialState = {
  posts: [],
  status: 'idle',
  error: null
};

const discussionSlice = createSlice({
  name: 'discussion',
  initialState,
  reducers: {
    // 添加帖子
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    // 删除帖子
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    // 更新帖子
    updatePost: (state, action) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    // 设置状态和错误，用于异步操作
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { addPost, deletePost, updatePost, setStatus, setError } = discussionSlice.actions;

export default discussionSlice.reducer;
