// utils/api.js

const API_BASE_URL = 'https://your-backend-url.com/api';

export const fetchPosts = async () => {
  const response = await fetch(`${API_BASE_URL}/discussions`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return await response.json();
};

export const createPost = async (post) => {
  const response = await fetch(`${API_BASE_URL}/discussions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });
  if (!response.ok) {
    throw new Error('Failed to create post');
  }
  return await response.json();
};

export const deletePostById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/discussions/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Failed to delete post');
  }
  return await response.json();
};

