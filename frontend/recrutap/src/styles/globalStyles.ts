import { createGlobalStyle } from "styled-components";
import "../index.css";

const GlobalStyles = createGlobalStyle`
 body, #root {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Source Sans 3', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.title};
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;