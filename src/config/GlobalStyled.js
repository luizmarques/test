import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
      margin:0;
      padding:0;
      outline:none;
  }
  :root{
    --color-default: #1117A2;
    --color-light: #fff;

    --color-primary: var(--color-default);
    --color-secondary: #414141;

    --layout-header: var(--color-primary);
    --layout-footer: var(--color-secondary);
  }
  
  body,
  #root{
        height: 100vh;
  }

`;

export default GlobalStyle;
