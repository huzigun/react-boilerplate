import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Input, Button } from 'antd';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';

const HeaderStyle = css`
  height: 64px;
  box-shadow: 0 2px 8px #f0f1f2;
  z-index: 10;

  .search-box {
    display: flex;
    align-items: center;
  }

  .search-input {
    border: 0;
    width: 200px;
  }

  .spacer {
    flex: 1;
  }
`;

const HeaderWrapper = ({ history }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  const logout = useCallback(() => {
    dispatch({ type: 'LOG_OUT_REQUEST' });
  }, [dispatch]);

  return (
    <Row align="middle" css={HeaderStyle}>
      <Col xs={24} md={6} xl={5} xxl={4} style={{ paddingLeft: '2rem' }}>
        <Link to="/">로고</Link>
      </Col>
      <Col xs={24} md={18} xl={19} xxl={20} style={{ paddingRight: '2rem' }}>
        <div className="search-box">
          <Input placeholder="Basic usage" allowClear className="search-input" size="small" />
          <div className="spacer"></div>
          {me && <Button onClick={logout}>로그아웃</Button>}
        </div>
      </Col>
    </Row>
  );
};

export default HeaderWrapper;
