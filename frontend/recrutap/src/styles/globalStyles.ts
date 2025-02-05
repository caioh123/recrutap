import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
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