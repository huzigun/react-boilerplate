import { css } from '@emotion/core';

export const LoginBox = css`
  width: 100%;
  max-width: 300px;
  margin: 0 auto 15vh auto;
`;

export const LoginWrapper = css`
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

export const LoginForm = css`
  width: 100%;
  padding: 1rem;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  .btn {
    width: 100%;
  }
  .google-btn {
    font-size: 0.84rem;
  }
`;

export const InputBox = css`
  margin-bottom: 0.75rem;
`;

export const orStyle = css`
  font-size: 0.84rem;
  font-weight: 400;
  color: #bbb;
`;
