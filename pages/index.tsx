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
            Beka <br /> Maisuradze
          </WhiteText>
          <GreenText className="profession">
            {`> ${context.data.position}`}
          </GreenText>
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
  height: calc(95.8vh - 60px);

  .wrapper {
    margin-left: 18px;
    padding-top: 10vh;

    .greeting {
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
    }

    .name {
      font-size: 52px;
      line-height: 100%;
      margin: 10px 0 8px -2px;
    }
  }

  .github {
    position: absolute;
    left: 18px;
    bottom: 10%;
    .link {
      margin-top: 16px;
      p {
        display: inline;
      }
    }
  }
`;
