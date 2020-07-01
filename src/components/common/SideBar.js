import React from 'react';
import { Col, Menu } from 'antd';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const MenuWrapper = styled(Menu)`
  height: 100%;
`;

const SideBar = () => {
  return (
    <Col xs={24} md={6} xl={5} xxl={4}>
      <MenuWrapper mode="inline">
        <Menu.Item>
          <Link to="/channel">채널</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/notice">공지사항</Link>
        </Menu.Item>
      </MenuWrapper>
    </Col>
  );
};

export default SideBar;
