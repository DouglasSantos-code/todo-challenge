import styled from "styled-components";
import { TaskDone } from "../../type";

export const Box = styled.div`
  background-color: var(--gray-500);
  color: var(--gray-100);
  border-radius: var(--br-1);
  border: 1px solid var(--gray-400);
  max-width: 736px;
  height: max-content;
  margin: 12px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

export const ContainerCheckbox = styled.div(
  ({ isComplete }: TaskDone) => `

  background-color: ${isComplete ? "var(--purple-dark)" : "transparent"};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${
    isComplete ? "4px solid var(--purple-dark)" : "2px solid var(--blue)"
  };
  position: absolute;
  margin-left: 13.5px;
  z-index: 0;
`
);

export const Input = styled.div(
  ({ isComplete }: TaskDone) => `

  input{
    opacity:0;
    width:24px;
    height:24px;
  }

  display: flex;
  align-items: center;
  margin-left: 10px;
  z-index: 5;
  label {
    word-wrap: break-word;
    max-width:39rem;
    margin-left: 12px;
    color: ${isComplete ? "var(--gray-300)" : "var(--gray-100)"};
    text-decoration: ${isComplete ? "line-through" : "initial"};
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
