import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fira Code', sans-serif;

        ::-webkit-scrollbar {
            width: 11px;
    }

    ::-webkit-scrollbar-track {
      background: #1e2d3d;
      transition: 0.5s;
      outline: 1px solid #1c2b3a;
    }

    ::-webkit-scrollbar-thumb {
      background: #011221;
      border-radius: 5px;
      transition: 0.5s;
      width: 12px;
    }
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
        color: white;
    }

    button {
        cursor: pointer;
    }


`;

const GlobalWrapper = styled.div<{ menu: Boolean }>`
  background: #011627;
  width: 92vw;
  height: 95.8vh;
  overflow-y: ${({ menu }) => (menu ? "hidden" : "auto")};
  overflow-x: hidden;
  border: 1px solid #1e2d3d;
  border-radius: 8px;
  position: relative;
  background-image: url("./assets/shared/code-snippet.png");
  background-position: bottom 0 left 0px;
  background-size: 100%;

  @media (min-width: 1300px) {
    background-image: none;
  }
`;

export { GlobalStyle, GlobalWrapper };
