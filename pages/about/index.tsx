import { PaleText, WhiteText } from "@/styled-components/StyledTexts";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import StyledFolders from "@/styled-components/StyledFolders";
import { useContext, useState } from "react";
import { MyContext } from "../_app";

export default function about() {
  const [isInfo, setisInfo] = useState(true);
  const [isContacts, setIsContacts] = useState(false);
  const [isPersonal, setisPersonal] = useState(true);
  const [isProffesional, setisProffesional] = useState(false);

  const context = useContext(MyContext);

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <StyledAbout>
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
              onClick={() => {
                setisPersonal(!isPersonal);
                setisProffesional(false);
              }}
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
              onClick={() => {
                setisProffesional(!isProffesional);
                setisPersonal(false);
              }}
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
        <div className="main-content">
          <div className={isPersonal ? "active" : "inactive"}>
            <WhiteText>// info </WhiteText>{" "}
            <PaleText>
              / personal <br /> <br />
            </PaleText>
            <PaleText>{context.data.personalInfo}</PaleText>
          </div>

          <div className={isProffesional ? "active" : "inactive"}>
            <WhiteText>// info </WhiteText>{" "}
            <PaleText>
              / proffesional <br /> <br />
            </PaleText>
            <PaleText>{context.data.proffesionalInfo}</PaleText>
          </div>
        </div>
      </StyledAbout>
    </>
  );
}

const StyledAbout = styled.main`
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

  .heading {
    margin: 20px;
  }

  .main-content {
    position: relative;

    div {
      position: absolute;
      transition: 0.5s;
      padding: 15px;
    }
    .active {
      opacity: 1;
    }

    .inactive {
      opacity: 0;
    }

    p {
      display: inline;
    }
  }
`;
