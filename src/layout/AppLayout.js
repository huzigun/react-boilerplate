import { Row, Col } from 'antd';
import HeaderWrapper from '../components/common/HeaderWrapper';
import SideBar from '../components/common/SideBar';

/** @jsx jsx */
import { jsx } from '@emotion/core';

const AppLayout = ({ children }) => {
  return (
    <div id="app">
      <HeaderWrapper />
      <Row css={{ paddingTop: '20px', height: '100%' }}>
        <SideBar />
        <Col xs={24} md={18} xl={19} xxl={20} css={{ padding: '0 3rem' }}>
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;
