import styled from 'styled-components';
import { inputWithoutText } from '../../type';

export const Container = styled.div`
  width: 736px;
  height: 54px;
  margin: auto;
  margin: -30px auto 80px auto;
  display: flex;
  gap: 8px;

  input {
    background: #262626;
    border: 1px solid #0d0d0d;
    border-radius: 8px;
    width: 638px;
    color: #fff;
    font-size: 16px;
    padding-left: 16px;

    ::placeholder {
      font-size: 16px;
      color: #808080;
    }

    :focus-visible {
      border: 1px solid hsl(237, 92%, 75%);
      outline: none;
    }
  }
`;

export const AddTask = styled.button(
  ({ hasTask }: inputWithoutText) => `
  background-color: #1e6f9f;
  color: #f2f2f2;
  font-weight: bold;
  border: none;
  font-size: 14px;
  width: 90px;
  height: 52px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${hasTask !== '' ? 1 : 0.6};
  cursor: ${hasTask !== '' ? 'pointer' : 'not-allowed'};

  span {
    margin-right: 8px;
  }
`
);
