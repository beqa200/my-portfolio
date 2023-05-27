import { useContext } from "react";

import {
  GreenText,
  OrangeText,
  PaleText,
  PurpleText,
  WhiteText,
} from "@/styled-components/StyledTexts";
import Head from "next/head";
import styled from "styled-components";
import { MyContext } from "./_app";
import Image from "next/image";

export default function Home() {
  const context = useContext(MyContext);

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <StyledHome>
        <div className="wrapper">
          <WhiteText className="greeting">Hi all. I am</WhiteText>
          <WhiteText className="name">
            Beka <br className="desktop" />
            Maisuradze
          </WhiteText>
          <PurpleText className="profession">
            {`> ${context.data.position}`}
          </PurpleText>
        </div>

        <div className="github">
          <PaleText>// find my profile on Github:</PaleText>
          <div className="link">
            <PurpleText>const</PurpleText> <GreenText>githubLink</GreenText>{" "}
            <WhiteText>=</WhiteText>{" "}
            <a href="https://github.com/beqa200" target="_blank">
              <OrangeText className="navigate">
                https://
                <br />
                github.com/beqa200
              </OrangeText>
            </a>
          </div>
        </div>
        <div className="pattern">
          {[0.5, 1, 0.5].map((item) => (
            <Image
              src={"/assets/code-snippet-no-opacity.svg"}
              style={{ opacity: item }}
              width={560}
              height={182}
              alt=""
              key={Math.random()}
            />
          ))}
        </div>
      </StyledHome>
    </>
  );
}

const StyledHome = styled.main`
  background-image: url("./assets/bg-main-mobile.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top -70px left 0;
  height: calc(95.8vh - 57px);
  position: relative;
  overflow: hidden;

  @keyframes loadAnimateWrapper {
    0% {
      opacity: 0;
      margin-left: -100px;
    }
  }

  @keyframes loadAnimateGithub {
    0% {
      bottom: 0px;
      opacity: 0;
    }
  }

  @keyframes loadAnimatePattern {
    0% {
      scale: 0.5;
      opacity: 0;
    }
  }

  @media (min-width: 1440px) {
    background-image: url("./assets/bg-main-desktop.png");
    background-position: top -240px left 200px;
    padding-left: 5%;
    padding-top: 100px;

    br {
      display: none;
    }
  }

  .wrapper {
    margin-left: 18px;
    padding-top: 10vh;
    animation-name: loadAnimateWrapper;
    animation-duration: 2s;

    .greeting {
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;

      @media (min-width: 1440px) {
        margin-left: 5px;
      }
    }

    .name {
      font-size: 52px;
      line-height: 100%;
      margin: 10px 0 8px -2px;

      @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 4vw;
      }
    }

    .profession {
      @media (min-width: 1440px) {
        font-size: 32px;
      }
    }
  }

  .github {
    position: absolute;
    left: 5%;
    bottom: 10%;
    animation-name: loadAnimateGithub;
    animation-duration: 2s;

    @media (min-width: 1440px) {
      bottom: 34%;
      padding-left: 10px;
    }

    .link {
      margin-top: 16px;
      p {
        display: inline;

        @media (min-width: 1440px) {
          font-size: 20px;
        }
      }
      @media (min-width: 1440px) {
        .navigate {
          text-decoration: underline;
          line-height: 20px;

          &:hover {
            font-size: 22px;
            transition: 0.5s;
          }
        }
      }
    }
  }

  .pattern {
    display: none;

    @media (min-width: 1440px) {
      display: block;
      position: absolute;
      right: 10%;
      top: 0;
      display: flex;
      gap: 2vh;
      flex-direction: column;
      top: 50%;
      transform: translate(0, -54%);
      animation-name: loadAnimatePattern;
      animation-duration: 2s;
    }
  }
`;
