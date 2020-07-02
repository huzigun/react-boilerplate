import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Form, Button, Divider } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { InputBox, LoginBox, LoginForm, LoginWrapper, orStyle } from './style';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    dispatch({
      type: 'LOG_IN_REQUEST',
      data: { id: 'huzigun', nickname: '휴쥐군' },
    });
  }, [dispatch]);

  const loginWithGoogle = useCallback(() => {
    console.log('Google Auth');
  }, []);

  return (
    <div css={LoginWrapper}>
      <div css={LoginBox}>
        <h1 className="title">LOGIN</h1>
        <div css={LoginForm}>
          <Button onClick={loginWithGoogle} className="google-btn btn">
            <GoogleOutlined />
            Login with Google
          </Button>
          <Divider children={<div css={orStyle}>또는</div>} />
          <Form onFinish={onSubmit}>
            <div css={InputBox}>
              <Input placeholder="E-mail" />
            </div>
            <div css={InputBox}>
              <Input placeholder="password" type="password" />
            </div>
            <Button type="primary" htmlType="submit" className="btn">
              로그인
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
