import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    max-width: 100vw;
    overflow-x: hidden;
    min-height: 100vh;
    font-size: 16px;
    color: ${ props => props.theme.colors.text};
    font-weight: 500;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    text-decoration: none;
    outline: none;
    border: none;
  }
  button {
    background: none;
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`