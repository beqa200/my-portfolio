import { useContext, useState } from "react";
import styled from "styled-components";
import { MyContext } from "../_app";
import StyledFolders from "@/styled-components/StyledFolders";
import { PaleText, WhiteText } from "@/styled-components/StyledTexts";
import Image from "next/image";
import { BigStyledInput, StyledInput } from "@/styled-components/StyledInput";
import StyledButton from "@/styled-components/StyledButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function index() {
  const context = useContext(MyContext);
  const [isContacts, setIsContacts] = useState(false);
  const [isFindMe, setIsFindMe] = useState(false);
  const [submit, setSubmit] = useState(false);
  const { register, handleSubmit, watch, setValue } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    setSubmit(true);
  };

  const newMessage = () => {
    setSubmit(false);
    setValue("name", "");
    setValue("email", "");
    setValue("message", "");
  };

  return (
    <StyledContact>
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
            className="arrow"
            src={"/assets/triangle.png"}
            alt="triangle"
          />
          <WhiteText>contacts</WhiteText>
        </div>
        <div className={isContacts ? "files active2" : "files active2-reverse"}>
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
            className="arrow"
            src={"/assets/triangle.png"}
            alt="triangle"
          />
          <WhiteText>find-me-also-in</WhiteText>
        </div>
        <div className={isFindMe ? "files active2" : "files active2-reverse"}>
          {context.data.social.map((item) => (
            <a href={item.link} target="_blank">
              <div>
                <Image
                  width={12.73}
                  height={7.78}
                  src={"/assets/link.png"}
                  alt="arrow"
                />
                <PaleText>{item.name}</PaleText>
              </div>
            </a>
          ))}
        </div>
      </StyledFolders>
      {!submit ? (
        <form className="main-content" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <PaleText>_name:</PaleText>
            <StyledInput {...register("name", { required: true })} />
          </div>

          <div>
            <PaleText>_email:</PaleText>
            <StyledInput {...register("email", { required: true })} />
          </div>

          <div>
            <PaleText>_message:</PaleText>
            <BigStyledInput {...register("message", { required: true })} />
          </div>
          <StyledButton>submit-message</StyledButton>
        </form>
      ) : (
        <StyledThanks>
          <WhiteText className="heading">Thank you! 🤘</WhiteText>{" "}
          <PaleText className="text">
            Your message has been accepted. You will recieve answer really soon!
          </PaleText>
          <StyledButton onClick={() => newMessage()}>
            send-new-message
          </StyledButton>
        </StyledThanks>
      )}
    </StyledContact>
  );
}

const StyledContact = styled.main`
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
    padding: 15px;
    div {
      margin-top: 20px;
    }

    button {
      margin-top: 20px;
    }
  }
`;

const StyledThanks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .heading {
    font-size: 24px;
  }

  .text {
    text-align: center;
    padding: 20px;
  }
`;
