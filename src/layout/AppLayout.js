import React from 'react';
import { Link } from 'react-router-dom';

const AppLayout = ({ children }) => {
  return (
    <div id="app">
      <header style={{ marginBottom: '20px', borderBottom: '1px solid #dbdbdb' }}>
        <Link to="/">홈</Link>
        <Link to="/channel">채널</Link>
        <Link to="/notice">공지사항</Link>
      </header>
      {children}
    </div>
  );
};

export default AppLayout;
