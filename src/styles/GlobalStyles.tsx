import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Geologica:wght@300;400;700;800&display=swap');

  html { font-size: 62.5% }
  
  body {
    font-family: Geologica, 'Noto Sans KR', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor}
  }

  * {
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;