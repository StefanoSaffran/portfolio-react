import { createGlobalStyle } from 'styled-components';

import colors from '~/styles/colors';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Dancing+Script:400,700&display=swap');
@import 'rc-progress/assets/index.css';

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: ${colors.background};
  }

  body, input, textarea, button, input::placeholder, textarea::placeholder {
    font: 17px 'Roboto', sans-serif;;
    line-height: 1;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
