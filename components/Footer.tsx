import styled from "styled-components";
import Image from "next/image";
import { useContext } from "react";
import { MyContext } from "@/pages/_app";
export default function Footer() {
  const context = useContext(MyContext);
  return (
    <StyledFooter className={context.menu ? "find-animate" : "find-animate2"}>
      <p>find me in:</p>
      <div>
        <a href="https://www.facebook.com/beqa.maisuradze.315" target="_blank">
          <Image
            width={29}
            height={29}
            src={"/assets/facebook.svg"}
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
            src={"/assets/linkedin.svg"}
            alt="linkedin"
          />
        </a>
        <a href="https://github.com/beqa200" target="_blank">
          <Image
            width={29}
            height={29}
            src={"/assets/github.svg"}
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
  div {
    display: flex;
    a {
      border-left: 1px solid #1e2d3d;
      padding: 12px;
      box-sizing: content-box;
    }
  }
`;
