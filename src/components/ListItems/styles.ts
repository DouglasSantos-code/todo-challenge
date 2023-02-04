import styled from "styled-components";

export const Box = styled.div`
  background-color: #262626;
  color: #f2f2f2;
  border-radius: 8px;
  border: 1px solid #333333;
  max-width: 736px;
  height: 72px;
  margin: 12px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:first-child {
    margin-left: 16px;
    label {
      margin-left: 12px;
    }
  }
`;

export const Delete = styled.div`
  color: #808080;
  cursor: pointer;
  margin-right: 22px;
`;
