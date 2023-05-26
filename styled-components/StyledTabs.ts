import styled from "styled-components";

const StyledTabs = styled.div`
  width: 100%;
  border-bottom: 1px solid #1e2d3d;
  display: none;


  @media (min-width: 1440px) {
    display: flex;
  }

  @keyframes tabAnimate {
    0% {
      margin-left: -100px;
      opacity: 0;
      scale: 0.5;
    }
    100% {
      margin-left: 0px;
    }
  }

  @keyframes identifier2 {
    0% {
      argin-left: 0px;
    }
    100% {
      margin-left: -100px;
      opacity: 0;
      scale: 0.5 m;
    }
  }

  @keyframes beforeAnimate {
    0% {
      width: 0;
    }
    100% {
      width: 100%
    }
  }
  p {
    padding: 15px;
    border-right: 1px solid #1e2d3d;
    cursor: pointer;
    position: relative;
    &:hover::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background-color: #1e2d3d;
      animation-name: beforeAnimate;
      animation-duration: 0.5s;
    }

    img {
      margin-left: 25px;
      cursor: default;

      &:hover {
        filter: brightness(1000%);
        transition: 1s;
      }
    }
  }

  .tabActive {
    animation-name: tabAnimate;
    animation-duration: 1s;
  }
`;

export default StyledTabs;
