import styled from 'styled-components';
import { TaskDone } from '../../type';

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
`;

export const Input = styled.div(
  ({ isComplete }: TaskDone) => `

  margin-left: 16px;
  label {
    margin-left: 12px;
    color: ${isComplete ? '#808080' : '#F2F2F2'};
    text-decoration: ${isComplete ? 'line-through' : 'initial'};
  }
`
);

export const Delete = styled.div`
  color: #808080;
  cursor: pointer;
  margin-right: 22px;

  :hover {
    color: #f2f2f2;
    transition: 0.2s;
  }
`;
