import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    min-height: 100vh;
    font-size: 16px;
    color: ${ props => props.theme.colors.text};
    transition: background 0.3s, color 0.3s, border 0.3s; 
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
  }
  a {
    text-decoration: none;
  }
`