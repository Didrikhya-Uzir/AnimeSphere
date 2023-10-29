import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        color: white;
        font-family: "Lato", sans-serif;
    }

    body{
        background: #23252b;
    }

`;


export default GlobalStyle;