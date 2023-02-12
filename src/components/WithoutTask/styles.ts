import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 736px;
  margin: 24px auto 0 auto;
  padding-top: 64px;
  border-top: 1px solid var(--gray-400);
`;

export const Icon = styled.div`
  color: var(--gray-400);
  margin-bottom: 16px;
`;

export const Text = styled.div`
  color: var(--gray-300);
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-weight: bold;
    margin-bottom: 4px;
  }
`;
