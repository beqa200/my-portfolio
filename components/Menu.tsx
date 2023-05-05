import { MyContext } from "@/pages/_app";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";

export default function Menu() {
  const context = useContext(MyContext);

  return (
    <StyledMenu className={context.menu ? "menu-animate" : "menu-animate2"}>
      <>
        <Link href={"/"} onClick={() => context.setMenu(false)}>
          _hello
        </Link>
        <Link href={"/about"} onClick={() => context.setMenu(false)}>
          _about-me
        </Link>
        <Link href={"/projects"} onClick={() => context.setMenu(false)}>
          _projects
        </Link>
        <Link href={"/contact-me"} onClick={() => context.setMenu(false)}>
          _contact-me
        </Link>
      </>
      <div
        className={context.menu ? "find find-animate" : "find find-animate2"}
      >
        <p>find me in:</p>
        <div>
          <a
            href="https://www.facebook.com/beqa.maisuradze.315"
            target="_blank"
          >
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
      </div>
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  position: absolute;
  z-index: 9;
  display: flex;
  flex-direction: column;
  background-color: #011627;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  width: 92vw;
  height: calc(95.8vh - 55px);
  left: 0;
  top: 55px;

  a {
    border-bottom: 1px solid #1e2d3d;
    padding: 17px 14px;
    color: #ffffff;
  }

  .find {
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

    div {
      display: flex;
      a {
        border-left: 1px solid #1e2d3d;
        padding: 11px;
        box-sizing: content-box;
      }
    }
  }

  @keyframes findAppear {
    from {
      margin-bottom: -1000px;
    }
    to {
      margin-bottom: 0;
    }
  }

  @keyframes findDisappear {
    from {
      margin-bottom: 0;
    }
    to {
      margin-bottom: -3000px;
    }
  }

  .find-animate {
    animation-name: findAppear;
    animation-duration: 1.2s;
    animation-fill-mode: backwards;
  }

  .find-animate2 {
    animation-name: findDisappear;
    animation-duration: 1s;
    animation-fill-mode: backwards;
  }
`;
