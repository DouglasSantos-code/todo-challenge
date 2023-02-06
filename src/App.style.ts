import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #fff;
    background: #1A1A1A;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Header = styled.header`
  background-color: #0d0d0d;
  color: #4ea8de;
  height: 160px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;
