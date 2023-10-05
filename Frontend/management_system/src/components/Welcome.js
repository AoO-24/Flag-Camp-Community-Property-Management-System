// components/Welcome.js
import './Welcome.css';


import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to Our Community!</h1>
      <p>Explore the features of our platform:</p>
      <ul>
        <li><Link to="/discussion">Discussion Board</Link></li>
        {/* 这里可以添加其他的链接，比如： */}
        {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
      </ul>
    </div>
  );
};

export default Welcome;
