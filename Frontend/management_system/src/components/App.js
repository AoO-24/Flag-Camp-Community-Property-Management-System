// components/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withAuth from '../utils/auth.hoc';
import Dashboard from './Dashboard';
import DiscussionBoard from './DiscussionBoard';
import Login from './Login';
import Navbar from './Navbar';
import Welcome from './Welcome';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* 路由和布局配置 */}
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/discussion" component={DiscussionBoard} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={withAuth(Dashboard)} />
          <Route path="/discussion" component={withAuth(DiscussionBoard)} />
          {/* ... 其他路由 */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
