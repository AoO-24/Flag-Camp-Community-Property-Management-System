// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/discussion">Discussion Board</Link>
      {/* 添加其他导航链接，如： */}
      {/* <Link to="/dashboard">Dashboard</Link> */}
    </nav>
  );
};

export default Navbar;
