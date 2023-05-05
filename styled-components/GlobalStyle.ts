import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fira Code', sans-serif;
    }

    body {
        background: #010C15;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a{
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;

const GlobalWrapper = styled.div`
  background: #011627;
  width: 92vw;
  height: 95.8vh;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid #1e2d3d;
  border-radius: 8px;
  position: relative;
`;

export { GlobalStyle, GlobalWrapper };
