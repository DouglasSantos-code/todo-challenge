import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 736px;
  margin: 24px auto 0 auto;
  padding-top: 64px;
  border-top: 1px solid #333333;
`;

export const Icon = styled.div`
  color: #525252;
  margin-bottom: 16px;
`;

export const Text = styled.div`
  font-size: 16px;
  color: #808080;
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-weight: bold;
    margin-bottom: 4px;
  }
`;
