import { createGlobalStyle } from "styled-components";

export const GlobalStyling = createGlobalStyle`

  @font-face {
    font-family: "Work Sans Bold";
    src: url("/assets/fonts/static/WorkSans-Bold.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: "Work Sans Regular";
    src: url("/assets/fonts/static/WorkSans-Regular.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: "Work Sans SemiBold";
    src: url("/assets/fonts/static/WorkSans-SemiBold.ttf");
    font-display: swap;

  }
  * , ::before , ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  :root {
    --dark-purple: #301534;
    --pink: #AD28EB; 
    --light-pink: #F8EEFF;
    --pale-purple: #8B6990;
    --white: #FFFFFF;
  }
  body {
    background-color: var(--light-pink);
  }
  #root {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
