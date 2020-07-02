import { Col, Menu } from 'antd';
import { Link } from 'react-router-dom';

/** @jsx jsx */
import { jsx } from '@emotion/core';

const SideBar = () => {
  return (
    <Col xs={24} md={6} xl={5} xxl={4}>
      <Menu mode="inline" css={{ height: '100%' }}>
        <Menu.Item>
          <Link to="/channel">채널</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/notice">공지사항</Link>
        </Menu.Item>
      </Menu>
    </Col>
  );
};

export default SideBar;
