import styled from 'styled-components';

export const Container = styled.div`
  width: 736px;
  height: 54px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin: -30px auto 80px auto;
  gap: 8px;

  input {
    background: #262626;
    border: 1px solid #0d0d0d;
    border-radius: 16px;
    width: 638px;
    color: #fff;
    font-size: 16px;

    ::placeholder {
      padding-left: 16px;
      font-size: 16px;
      color: #808080;
    }
  }
`;

export const AddTask = styled.button`
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
  cursor: pointer;

  span {
    margin-right: 8px;
  }
`;
