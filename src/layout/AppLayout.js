import React from 'react';
import { Row, Col } from 'antd';
import HeaderWrapper from '../components/common/HeaderWrapper';
import SideBar from '../components/common/SideBar';

import styled from '@emotion/styled';

const ContentWrapper = styled(Col)`
  padding: 0 3rem;
`;

const AppLayout = ({ children }) => {
  return (
    <div id="app">
      <HeaderWrapper />
      <Row style={{ paddingTop: '20px', height: '100%' }}>
        <SideBar />
        <ContentWrapper xs={24} md={18} xl={19} xxl={20}>
          {children}
        </ContentWrapper>
      </Row>
    </div>
  );
};

export default AppLayout;
