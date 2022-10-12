import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GongGothicMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  body {
    font-family: 'GongGothicMedium', "Arial", sans-serif;
    padding-top: 1em;
    white-space: pre-wrap;
  }
  ul, ol {
    list-style: none;
    padding-left: 0px;
  }
`;

export default GlobalStyle;
