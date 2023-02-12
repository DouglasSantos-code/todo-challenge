import styled from 'styled-components';
import { TaskDone } from '../../type';

export const Box = styled.div`
  background-color: var(--gray-500);
  color: var(--gray-100);
  border-radius: var(--br-1);
  border: 1px solid var(--gray-400);
  max-width: 736px;
  height: 72px;
  margin: 12px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.div(
  ({ isComplete }: TaskDone) => `

  margin-left: 16px;
  label {
    margin-left: 12px;
    color: ${isComplete ? 'var(--gray-300)' : 'var(--gray-100)'};
    text-decoration: ${isComplete ? 'line-through' : 'initial'};
  }
`
);

export const Delete = styled.div`
  color: var(--gray-300);
  cursor: pointer;
  margin-right: 22px;

  :hover {
    color: var(--gray-100);
    transition: 0.2s;
  }
`;
