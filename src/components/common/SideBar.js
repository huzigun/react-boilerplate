import { Col, Menu } from 'antd';
import { Link } from 'react-router-dom';

import routes from '../../route';

/** @jsx jsx */
import { jsx } from '@emotion/core';

const SideBar = () => {
  return (
    <Col xs={24} md={6} xl={5} xxl={4}>
      <Menu mode="inline" css={{ height: '100%' }}>
        {routes.map((el) =>
          el.path === '/' ? null : (
            <Menu.Item key={el.path}>
              <Link to={el.path}>{el.name}</Link>
            </Menu.Item>
          ),
        )}
      </Menu>
    </Col>
  );
};

export default SideBar;
