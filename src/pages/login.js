import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { Input, Form, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const LoginWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    text-align: center;
    font-size: 0.85rem;
    font-weight: 600;
  }
`;

const LoginForm = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 0.5rem 1rem 1rem;
  border: 1px solid #f0f0f0;
`;

const InputBox = styled.div`
  margin-bottom: 0.75rem;
`;

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    dispatch({
      type: 'LOG_IN_REQUEST',
      data: { id: 'huzigun', nickname: '휴쥐군' },
    });
  }, []);

  return (
    <LoginWrapper>
      <LoginForm>
        <h1 className="title">LOGIN</h1>
        <Form onFinish={onSubmit}>
          <InputBox>
            <Input placeholder="E-mail" />
          </InputBox>
          <InputBox>
            <Input placeholder="password" type="password" />
          </InputBox>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            로그인
          </Button>
        </Form>
      </LoginForm>
    </LoginWrapper>
  );
};

export default LoginPage;
