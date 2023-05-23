import {
  GreenText,
  OrangeText,
  PaleText,
  PurpleText,
  WhiteText,
} from "@/styled-components/StyledTexts";
import Head from "next/head";
import { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "./_app";

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
            Beka <br className="desktop" /> Maisuradze
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
              <OrangeText style={{ textDecoration: "underline" }}>
                https://
                <br />
                github.com/beqa200
              </OrangeText>
            </a>
          </div>
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
  height: calc(95.8vh - 77px);

  @media (min-width: 1300px) {
    background-image: url("./assets/bg-main-desktop.png");
    background-position: top -240px left 200px;
    padding-left: 200px;
    padding-top: 100px;
    margin-top: 20px;
  }

  .wrapper {
    margin-left: 18px;
    padding-top: 10vh;
    .greeting {
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;

      @media (min-width: 1300px) {
        margin-left: 5px;
      }
    }

    .name {
      font-size: 52px;
      line-height: 100%;
      margin: 10px 0 8px -2px;

      @media (min-width: 1300px) {
        font-weight: 400;
        font-size: 72px;
      }

      br {
        @media (min-width: 1300px) {
          display: none;
        }
      }
    }

    .profession {
      @media (min-width: 1300px) {
        font-size: 32px;
      }
    }
  }

  .github {
    position: absolute;
    left: 18px;
    bottom: 10%;

    @media (min-width: 1300px) {
      bottom: 34%;
      padding-left: 200px;
    }

    .link {
      margin-top: 16px;
      p {
        display: inline;
      }
    }
  }
`;
