import styled from "styled-components";
import Image from "next/image";
import { useContext } from "react";
import { MyContext } from "@/pages/_app";
import { PaleText } from "@/styled-components/StyledTexts";
export default function Footer() {
  const context = useContext(MyContext);
  return (
    <StyledFooter className={context.menu ? "find-animate" : "find-animate2"}>
      <p className="find">find me in:</p>
      <div className="wrapper">
        <div>
          <a
            href="https://www.facebook.com/beqa.maisuradze.315"
            target="_blank"
          >
            <Image
              width={29}
              height={29}
              src={"/assets/contact-icons/facebook.svg"}
              alt="facebook"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/beka-maisuradze-76a730234/"
            target="_blank"
          >
            <Image
              width={29}
              height={29}
              src={"/assets/contact-icons/linkedin.svg"}
              alt="linkedin"
            />
          </a>
        </div>
        <a href="https://github.com/beqa200" target="_blank" className="github">
          <PaleText>@beqa200</PaleText>
          <Image
            width={29}
            height={29}
            src={"/assets/contact-icons/github.svg"}
            alt="github"
          />
        </a>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  height: 55px;
  align-items: center;
  width: 100%;
  padding: 0 4px 0 18px;
  color: #607b96;
  border-top: 1px solid #1e2d3d;
  overflow: hidden;
  background-color: #011627;

  .find {
    width: 120px;
  }

  @media (min-width: 1440px) {
    justify-content: start;
    gap: 20px;
  }
  .wrapper {
    display: flex;

    @media (min-width: 1440px) {
      justify-content: space-between;
      width: 92%;
    }
    a {
      border-left: 1px solid #1e2d3d;
      padding: 12px;
      box-sizing: content-box;
    }

    div {
      display: flex;
    }

    .github {
      display: flex;
      align-items: center;
      gap: 10px;

      p {
        display: none;
      }

      @media (min-width: 1440px) {
        padding-right: 0;
        p {
          display: block;
        }
      }
    }
  }
`;
