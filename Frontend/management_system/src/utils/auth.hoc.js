// utils/auth.hoc.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const user = useSelector(state => state.auth.user);

    if (!user) {
      // 如果用户未登录，重定向到登录页面
      return <Redirect to="/login" />;
    }

    // 如果用户已登录，渲染原始组件
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
