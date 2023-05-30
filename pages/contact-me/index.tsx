import { useContext, useState } from "react";
import styled from "styled-components";
import { MyContext } from "../_app";
import StyledFolders from "@/styled-components/StyledFolders";
import {
  OrangeText,
  PaleText,
  PinkText,
  PurpleText,
  WhiteText,
} from "@/styled-components/StyledTexts";
import Image from "next/image";
import { BigStyledInput, StyledInput } from "@/styled-components/StyledInput";
import StyledButton from "@/styled-components/StyledButton";
import { SubmitHandler, useForm } from "react-hook-form";
import Head from "next/head";

export default function index() {
  const context = useContext(MyContext);

  const [isContacts, setIsContacts] = useState(false);
  const [isFindMe, setIsFindMe] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { register, handleSubmit, watch, setValue } = useForm<FormType>();

  const today = new Date();
  const date = today.toString().split(" ").slice(0, 3).join(" ");

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    setLoading(true);

    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (response.status == 200) {
      setSubmit(true);
      setLoading(false);
    } else {
      setLoading(false);
      setEmailError(true);
    }
  };

  const newMessage = () => {
    setSubmit(false);
    setEmailError(false);
    setValue("name", "");
    setValue("email", "");
    setValue("message", "");
  };

  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>

      <StyledContact>
        <div className="flex-wrapper">
          <WhiteText className="heading">_contact-me</WhiteText>
          <StyledFolders>
            <div
              onClick={() => {
                setIsContacts(!isContacts);
              }}
              className={isContacts ? "folder active" : "folder"}
            >
              <Image
                width={8.5}
                height={6}
                className={!isContacts ? "triangle" : ""}
                src={"/assets/shared/triangle.png"}
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

            <div
              onClick={() => {
                setIsFindMe(!isFindMe);
              }}
              className={isFindMe ? "folder active" : "folder"}
            >
              <Image
                width={8.5}
                height={6}
                className={!isFindMe ? "triangle" : ""}
                src={"/assets/shared/triangle.png"}
                alt="triangle"
              />
              <WhiteText>find-me-also-in</WhiteText>
            </div>
            <div
              className={isFindMe ? "files active2" : "files active2-reverse"}
            >
              {context.data.social.map((item) => (
                <a href={item.link} target="_blank" key={Math.random()}>
                  <div>
                    <Image
                      width={12.73}
                      height={7.78}
                      src={"/assets/shared/link.png"}
                      alt="arrow"
                    />
                    <PaleText>{item.name}</PaleText>
                  </div>
                </a>
              ))}
            </div>
          </StyledFolders>
        </div>
        <div className="main-content">
          <div className="wrapper">
            {submit ? (
              <StyledThanks>
                <WhiteText className="heading2">Thank you! 🤘</WhiteText>{" "}
                <PaleText className="text">
                  Your message has been accepted. You will recieve answer really
                  soon!
                </PaleText>
                <StyledButton onClick={() => newMessage()}>
                  send-new-message
                </StyledButton>
              </StyledThanks>
            ) : !loading ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <PaleText>_name:</PaleText>
                  <StyledInput {...register("name", { required: true })} />
                </div>

                <div>
                  <PaleText>_email:</PaleText>
                  <StyledInput
                    {...register("email", { required: true })}
                    style={emailError ? { outline: "1px solid #991814" } : {}}
                    onChange={() => setEmailError(false)}
                  />
                </div>

                <div>
                  <PaleText>_message:</PaleText>
                  <BigStyledInput
                    {...register("message", { required: true })}
                  />
                </div>
                <StyledButton>submit-message</StyledButton>
              </form>
            ) : (
              <Loading />
            )}
          </div>
          <div className="code">
            <PaleText className="lines">
              1<br /> 2 <br />3<br /> 4<br /> 5<br /> 6 <br />7<br /> 8<br /> 9{" "}
              <br />
              10
              <br /> 11 <br />
              12
              <br />
              13
              <br />
              14
            </PaleText>
            <div>
              <PinkText>const</PinkText> <PurpleText>button</PurpleText>{" "}
              <PinkText>=</PinkText> <PurpleText>document</PurpleText>
              <PaleText>.</PaleText>
              <PurpleText>querySelector</PurpleText>
              <PaleText>(</PaleText>
              <OrangeText>'#sendBtn'</OrangeText>
              <PaleText>);</PaleText>;
              <PinkText>
                <br />
                <br />
                const
              </PinkText>{" "}
              <PurpleText>message</PurpleText>
              <PinkText> = </PinkText> <PaleText>{"{"}</PaleText>
              <br />
              <PurpleText>name</PurpleText>
              <PaleText>: </PaleText> <OrangeText>"{watch("name")}"</OrangeText>
              <PaleText>,</PaleText>
              <br />
              <PurpleText>email</PurpleText>
              <PaleText>:</PaleText> <OrangeText>"{watch("email")}"</OrangeText>
              <PaleText>,</PaleText>
              <br />
              <PurpleText>message</PurpleText> <PaleText>:</PaleText>{" "}
              <OrangeText>"{watch("message")}"</OrangeText>
              <PaleText>,</PaleText>
              <br />
              <PaleText>date:</PaleText> <OrangeText>"{date}"</OrangeText>
              <br />
              <PaleText>{"}"}</PaleText>
              <br />
              <br />
              <PurpleText>button</PurpleText>
              <PaleText>.</PaleText>
              <PurpleText>addEventListener</PurpleText>
              <PaleText>(</PaleText>
              <OrangeText>'click'</OrangeText>
              <PaleText>, ()</PaleText> <PinkText>{"=>"}</PinkText>{" "}
              <PaleText>{"{"}</PaleText>
              <br /> <PurpleText>form</PurpleText>
              <PaleText>.</PaleText>
              <PurpleText>send</PurpleText>
              <PaleText>(</PaleText>
              <PurpleText>message</PurpleText>
              <PaleText>);</PaleText>
              <br />
              <PaleText>{"})"}</PaleText>
            </div>
          </div>
        </div>
      </StyledContact>
    </>
  );
}

const StyledContact = styled.main`
  height: calc(95.8vh - 57px);
  overflow: auto;

  @media (min-width: 1440px) {
    display: flex;
    overflow: hidden;
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

  .heading {
    padding: 20px;

    @media (min-width: 1440px) {
      border-right: 1px solid #1e2d3d;
    }
  }

  .main-content {
    width: 100%;
    display: flex;
    margin-top: 20px;
    @media (min-width: 1440px) {
      margin-top: 0;
    }
    .wrapper {
      width: 100%;

      @media (min-width: 1440px) {
        width: 50%;
      }

      form {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 20px;
        margin-top: -40px;

        @keyframes formAppear {
          0% {
            margin-top: -90px;
            opacity: 0;
          }
          100% {
            margin-top: 00px;
            opacity: 1;
          }
        }

        @media (min-width: 1440px) {
          margin-top: 0;
          padding: 30px 15%;
          animation-name: formAppear;
          animation-duration: 1s;
        }

        div {
          margin-top: 20px;
        }

        button {
          margin-top: 20px;
        }
      }
    }

    .code {
      width: 50%;
      gap: 25px;
      padding: 100px 5%;
      display: none;
      animation-name: codeAppear;
      animation-duration: 1s;
      border-left: 1px solid #1e2d3d;
      @keyframes codeAppear {
        0% {
          opacity: 0;
          scale: 0.5;
        }
        100% {
          opacity: 1;
          scale: 1;
        }
      }

      @media (min-width: 1440px) {
        display: flex;
      }

      .lines {
        text-align: right;
      }

      p {
        display: inline;
        font-weight: 450;
        line-height: 1.5;
      }
    }
  }
`;

const StyledThanks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 60px 10%;

  .heading2 {
    font-size: 24px;

    @media (min-width: 1440px) {
      margin-top: calc(50% - 97px);
      font-size: 30px;
    }
  }

  .text {
    text-align: center;
    padding: 20px;
  }
`;

const Loading = styled.div`
  width: 80px;
  height: 80px;
  margin: auto;
  margin-top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 4px solid #607b96;
  border-top: 4px solid #011221;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
