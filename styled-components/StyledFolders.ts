import styled from "styled-components";

const StyledFolders = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2px;

  @media (min-width: 1440px) {
    border-right: 1px solid #1e2d3d;
    height: 100vh;
  }

  .folder {
    background-color: #1e2d3d;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 20px;
    img {
      object-fit: none;
      width: 10px;
      height: 10px;
      transition: 0.4s;
    }

    .triangle {
      rotate: -90deg;
    }
    &:hover {
      cursor: pointer;
    }
  }

  .active {
    margin-left: 1px;

    .arrow {
      rotate: 90deg;
    }
  }

  .files {
    display: flex;
    flex-direction: column;
    margin: 4px 0;
    margin-top: -65px;
    position: relative;
    z-index: -1;

    div {
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 5px 20px;
      
      img {
        height: 15px;
        width: 16px;
        object-fit: none;
        transition: 0.4s;

      }

      &:hover {
        p {
          opacity: 0.5;
          transition: 0.5s;
          cursor: pointer;
        }
      }
    }
  }

  @keyframes filesAppear {
    0% {
      opacity: 0;
    }
    50% {
      margin-top: 0;
    }
    100% {
      z-index: 1;
      margin-top: 0;
      opacity: 1;
    }
  }

  @keyframes filesDisappear {
    0% {
      z-index: 1;
      margin-top: 0px;
      opacity: 1;
    }
    20% {
      opacity: 0;
    }
    30% {
      z-index: -1;
    }
    100% {
      margin-top: -65px;
    }
  }

  .active2 {
    animation-name: filesAppear;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  .active2-reverse {
    animation-name: filesDisappear;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
`;

export default StyledFolders;
