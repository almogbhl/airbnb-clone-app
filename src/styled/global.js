import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* @import url('https://fonts.googleapis.com/css?family=Lato:400,700'); */

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
   
  box-sizing: border-box;
  font-size: 62.5%;
  /* font-family: 'Lato' ,-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  code {
  /* font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace; */
}
`;

export default GlobalStyle;