import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        weidth: 100vw;
        height: 100vh;
        background-color: #282828
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export default GlobalStyle;