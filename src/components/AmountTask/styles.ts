import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 736px;
  justify-content: space-between;
  margin: auto;
  font-size: 14px;
  font-weight: bold;
`;

export const TotalTask = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;

  :nth-child(1) {
    color: #4ea8de;
  }
  :nth-child(2) {
    color: #8284fa;
  }

  div {
    background-color: #333333;
    height: 20px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      padding: 0 8px;
      color: #d9d9d9;
    }
  }
`;

export const TaskCompleted = styled(TotalTask)``;
