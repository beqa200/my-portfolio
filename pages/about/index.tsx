import { PaleText, WhiteText } from "@/styled-components/StyledTexts";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import StyledFolders from "@/styled-components/StyledFolders";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../_app";
import StyledTabs from "@/styled-components/StyledTabs";
import StyledButton from "@/styled-components/StyledButton";

export default function about() {
  const context = useContext(MyContext);

  const [isInfo, setisInfo] = useState(true);
  const [isContacts, setIsContacts] = useState(false);
  const [isPersonal, setisPersonal] = useState(true);
  const [isProffesional, setisProffesional] = useState(false);
  const [tabs, setTabs] = useState<string[]>(["personal"]);

  useEffect(() => {
    if (isProffesional && !tabs.some((item) => item == "proffesional")) {
      setTabs((tabs: string[]) => [...tabs, "proffesional"]);
    }

    if (isPersonal && !tabs.some((item) => item == "personal")) {
      setTabs((tabs: string[]) => [...tabs, "personal"]);
    }
  }, [isPersonal, isProffesional]);

  const clickPersonal = () => {
    if (!isPersonal && isProffesional) {
      setisPersonal(!isPersonal);
      setisProffesional(false);
    }
  };

  const clickProffesional = () => {
    if (isPersonal && !isProffesional) {
      setisProffesional(!isProffesional);
      setisPersonal(false);
    }
  };

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <StyledAbout>
        <div className="flex-wrapper">
          <WhiteText className="heading">_about-me</WhiteText>
          <StyledFolders>
            <div
              onClick={() => {
                setisInfo(!isInfo);
              }}
              className={isInfo ? "folder active" : "folder"}
            >
              <Image
                width={8.5}
                height={6}
                className="arrow"
                src={"/assets/triangle.png"}
                alt="triangle"
              />
              <WhiteText>info</WhiteText>
            </div>
            <div className={isInfo ? "files active2" : "files active2-reverse"}>
              <div
                onClick={clickPersonal}
                className={isPersonal ? "active" : ""}
              >
                {" "}
                <Image
                  width={12.73}
                  height={7.78}
                  className="arrow"
                  src={"/assets/arrow.png"}
                  alt="arrow"
                />
                <Image
                  width={12.73}
                  height={7.78}
                  src={"/assets/orange-folder.png"}
                  alt="arrow"
                />
                <WhiteText>personal</WhiteText>
              </div>
              <div
                onClick={clickProffesional}
                className={isProffesional ? "active" : ""}
              >
                {" "}
                <Image
                  width={12.73}
                  height={7.78}
                  className="arrow"
                  src={"/assets/arrow.png"}
                  alt="arrow"
                />
                <Image
                  width={12.73}
                  height={7.78}
                  src={"/assets/green-folder.png"}
                  alt="arrow"
                />
                <WhiteText>proffesional</WhiteText>
              </div>
            </div>

            <div
              onClick={() => {
                setIsContacts(!isContacts);
              }}
              className={isContacts ? "folder active" : "folder"}
            >
              <Image
                width={8.5}
                height={6}
                className="arrow"
                src={"/assets/triangle.png"}
                alt="triangle"
              />
              <WhiteText>contacts</WhiteText>
            </div>
            <div
              className={isContacts ? "files active2" : "files active2-reverse"}
            >
              <div>
                <Image
                  width={12.73}
                  height={7.78}
                  src={"/assets/contact-icons/mail-icon.png"}
                  alt="arrow"
                />
                <PaleText>beqamaisuradze912@gmail.com</PaleText>
              </div>
              <div>
                {" "}
                <Image
                  width={12.73}
                  height={7.78}
                  src={"/assets/contact-icons/phone-icon.png"}
                  alt="arrow"
                />
                <PaleText>+(995) 579 09 55 87</PaleText>
              </div>
            </div>
          </StyledFolders>
        </div>
        <div className="main-content">
          <StyledTabs>
            {tabs.map((item) => (
              <PaleText
                className={
                  tabs.some((item2) => item2 == item) ? "tabActive" : ""
                }
                onClick={() => {
                  if (item == "personal") {
                    clickPersonal();
                  } else {
                    clickProffesional();
                  }
                }}
              >
                {item}
                <Image
                  src={"/assets/delete.png"}
                  width={9}
                  height={9}
                  alt="close"
                  onClick={(event) => {
                    event.stopPropagation();

                    tabs.length == 2 &&
                      setTabs((tabs: string[]) =>
                        tabs.filter((item2) => item2 != item)
                      );

                    if (item == "personal" && tabs.length == 2) {
                      clickProffesional();
                    } else if (item == "proffesional" && tabs.length == 2) {
                      clickPersonal();
                    }
                  }}
                />
              </PaleText>
            ))}
          </StyledTabs>{" "}
          <div className={isPersonal ? "active info" : "inactive info"}>
            <WhiteText>// info </WhiteText>{" "}
            <PaleText>
              / personal <br /> <br />
            </PaleText>
            <PaleText>/* {context.data.personalInfo} */</PaleText>
          </div>
          <div className={isProffesional ? "active info" : "inactive info"}>
            <WhiteText>// info </WhiteText>{" "}
            <PaleText>
              / proffesional <br /> <br />
            </PaleText>
            <PaleText>/* {context.data.proffesionalInfo} */</PaleText>
          </div>
          <div className="second-section">
            <Image
              src={
                isProffesional
                  ? "/assets/githubprofile.png"
                  : "/assets/lindinProfile.png"
              }
              width={800}
              height={435}
              alt=""
              className={isProffesional ? "activity" : "activity1"}
            />
            <StyledButton>
              {" "}
              <a
                href="./Beka_Maisuradze.pdf"
                download
                className="download-button"
              >
                Download CV
              </a>{" "}
              <Image
                src={"/assets/download.svg"}
                width={25}
                height={25}
                alt=""
              />
            </StyledButton>
          </div>
        </div>
      </StyledAbout>
    </>
  );
}

const StyledAbout = styled.main`
  height: calc(95.8vh - 57px);

  @media (min-width: 1440px) {
    display: flex;
    overflow: hidden;
  }

  .heading {
    padding: 20px;

    @media (min-width: 1440px) {
      border-right: 1px solid #1e2d3d;
    }
  }

  .main-content {
    position: relative;

    @media (min-width: 1440px) {
      width: 100%;
      overflow: auto;

      p {
        line-height: 200%;
      }
    }

    .info {
      position: absolute;
      transition: 0.5s;
      padding: 15px;

      @media (min-width: 1440px) {
        width: 50%;
        height: calc(100% - 114px);
        border-right: 1px solid #1e2d3d;
      }

      p {
        display: inline;
      }
    }

    .active {
      opacity: 1;
      z-index: 9;
    }

    .inactive {
      opacity: 0;
      z-index: -1;
    }
  }

  .second-section {
    width: 50%;
    height: calc(95.8vh - 120px);
    left: 50%;
    position: relative;
    display: none;

    @media (min-width: 1440px) {
      display: block;
    }

    @keyframes profileAnimation {
      0% {
        scale: 0;
        opacity: 0;
      }

      100% {
        scale: 1;
        opacity: 1;
      }
    }

    @keyframes profileAnimation1 {
      0% {
        scale: 0;
        opacity: 0;
      }

      100% {
        scale: 1;
        opacity: 1;
      }
    }

    .activity,
    .activity1 {
      width: 100%;
      height: 55%;
      border-radius: 0 0 30px 30px;
      animation-duration: 1s;
      animation-timing-function: ease;
    }

    .activity {
      animation-name: profileAnimation;
    }

    .activity1 {
      animation-name: profileAnimation1;
    }

    button {
      font-size: 25px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      bottom: 20%;

      img {
        margin-bottom: -5px;
      }

      @keyframes downloadAnimte {
        20% {
          margin-bottom: -10px;
        }
        50% {
          margin-bottom: 5px;
        }
        100% {
          margin-bottom: -5px;
        }
      }

      &:hover {
        img {
          animation-name: downloadAnimte;
          animation-duration: 1s;
          animation-timing-function: ease;
        }
      }
    }
  }
`;
