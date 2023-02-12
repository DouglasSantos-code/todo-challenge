import styled from 'styled-components';
import { inputWithoutText } from '../../type';

export const Container = styled.div`
  max-width: 736px;
  height: 54px;
  margin: auto;
  margin: -30px auto 80px auto;
  display: flex;
  gap: 8px;

  input {
    background: var(--gray-500);
    border: 1px solid var(--gray-700);
    border-radius: 8px;
    width: 638px;
    color: var(--gray-100);
    font-size: var(--fs-base);
    padding-left: 16px;

    ::placeholder {
      color: var(--gray-300);
    }

    :focus-visible {
      border: 1px solid var(--purple-dark);
      outline: none;
    }
  }
`;

export const AddTask = styled.button(
  ({ hasTask }: inputWithoutText) => `
  background-color: var(--blue-dark);
  color: var(--gray-100);
  font-weight: var(--fw-bold);
  border: none;
  font-size: var(--fs-md);
  width: 90px;
  height: 52px;
  border-radius: var(--br-1);
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
