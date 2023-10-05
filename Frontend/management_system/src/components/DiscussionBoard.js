import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, createPost, deletePostById } from "../utils/api";
import { addPost, deletePost, updatePost } from "../slice/discussionSlice";
import "./DiscussionBoard.css";

// 假设的帖子数据结构
const dummyPosts = [
    {
      id: 1,
      title: "帖子1",
      author: "张三",
      content: "帖子1的内容...",
      replies: [
        { id: 1, author: "李四", content: "回复1" },
        { id: 2, author: "王五", content: "回复2" }
      ]
    },
    {
      id: 2,
      title: "帖子2",
      author: "赵六",
      content: "帖子2的内容...",
      replies: [
        { id: 3, author: "李四", content: "回复3" },
        { id: 4, author: "王五", content: "回复4" }
      ]
    },
  ];  


function DiscussionBoard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [replyContent, setReplyContent] = useState("");

  //const posts = useSelector((state) => state.discussion.posts); // 从Redux store中获取帖子列表 
  //测试用途
  const posts = dummyPosts;

  const dispatch = useDispatch();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        data.forEach((post) => dispatch(addPost(post)));
      } catch (err) {
        setError("Failed to load posts.");
      }
    };

    loadPosts();
  }, [dispatch]);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handlePostSubmit = async () => {
    try {
      const post = await createPost({ title, content });
      dispatch(addPost(post));
      setTitle("");
      setContent("");
    } catch (err) {
      setError("Failed to create post.");
    }
  };

  const handlePostDelete = async (id) => {
    try {
      await deletePostById(id);
      dispatch(deletePost(id));
    } catch (err) {
      setError("Failed to delete post.");
    }
  };

  const handleReply = (postId) => {
    // 这里处理回复的逻辑，例如更新state或调用API
    console.log(`Reply to post ${postId}: ${replyContent}`);
    setReplyContent(""); // Clear the reply content after posting
  };

  return (
    <div className="discussion-board">

      {/* User info and Navbar */}
      <div className="header">
        <span className="username">Welcome, John Doe</span>
        <div className="navbar">
          <button className="active">Discussion Board</button>
          <button>Dashboard</button>
          <button>Schedule</button>
          <button>Payment</button>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        <div className="post-list">
          {posts.map((post) => (
            <div 
              key={post.id}
              className="post-summary"
              onClick={() => handlePostClick(post)}
            >
              <h2>{post.title}</h2>
              <p>{post.author}</p>
            </div>
          ))}
        </div>

        {selectedPost && (
          <div className="post-detail">
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.content}</p>
            <div className="replies">
              {selectedPost.replies.map((reply, index) => (
                <div key={index}>
                  <strong>{reply.author}</strong>: {reply.content}
                </div>
              ))}
              <textarea 
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Reply here..."
              ></textarea>
              <button onClick={() => handleReply(selectedPost.id)}>Reply</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DiscussionBoard;
