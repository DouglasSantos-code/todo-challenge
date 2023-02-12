import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 736px;
  justify-content: space-between;
  margin: auto;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

export const TotalTask = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;

  :nth-child(1) {
    color: var(--blue);
  }
  :nth-child(2) {
    color: var(--purple);
  }

  div {
    background-color: var(--gray-400);
    height: 20px;
    border-radius: var(--br-full);
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      padding: 0 8px;
      color: var(--gray-200);
    }
  }
`;

export const TaskCompleted = styled(TotalTask)``;
