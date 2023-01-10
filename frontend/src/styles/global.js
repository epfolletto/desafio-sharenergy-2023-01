import { createGlobalStyle } from "styled-components";
// import img_fundo from "./../assets/images/bg.svg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #1CA3A3;
    /* background-image: url({img_fundo}); // lembrar de colocar o $na frente das chaves do img */
  }
  body, input, textarea, button {
    font: 14px sans-serif;
  }

  ::-webkit-scrollbar {
     width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 7px;
  }
`