import { PaleText } from "@/styled-components/StyledTexts";
import styled from "styled-components";
import Image from "next/image";
import { useContext } from "react";
import { MyContext } from "@/pages/_app";
import Menu from "./Menu";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Header() {
  const context = useContext(MyContext);
  const path = useRouter().asPath;
  return (
    <StyledHeader>
      <PaleText className="name">beka-maisuradze</PaleText>

      <Image
        className={
          context.menu
            ? "burger-icon icon-animate"
            : "burger-icon icon-animate2"
        }
        width={16}
        height={16}
        src={!context.menu ? "/assets/shared/hamburger.png" : "/assets/shared/delete.png"}
        alt="menu"
        onClick={() => context.setMenu(!context.menu)}
      />

      <nav>
        <div className="flex-wrapper">
          <StyledLink href="/" className={path == "/" ? "active" : "inActive"}>
            <PaleText>_hello</PaleText>
          </StyledLink>
          <StyledLink
            href="/about"
            className={path == "/about" ? "active" : "inActive"}
          >
            <PaleText>_about_me</PaleText>
          </StyledLink>
          <StyledLink
            href="/projects"
            className={path == "/projects" ? "active" : "inActive"}
          >
            <PaleText>_projects</PaleText>
          </StyledLink>
        </div>
        <StyledLink
          href="/contact-me"
          className={
            path == "/contact-me" ? "contact active" : "contact inActive"
          }
        >
          <PaleText>_contact-me</PaleText>
        </StyledLink>
      </nav>

      <Menu />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  border-bottom: 1px solid #1e2d3d;

  @media (min-width: 1440px) {
    justify-content: space-between;
    gap: 100px;
    padding-right: 0;
  }

  .name {
    @media (min-width: 1440px) {
      width: 160px;
    }
  }

  @keyframes burgerAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes deleteAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .burger-icon {
    @media (min-width: 1440px) {
      display: none;
    }
  }

  .icon-animate {
    animation-name: burgerAppear;
    animation-duration: 1s;
    animation-fill-mode: backwards;
  }

  .icon-animate2 {
    animation-name: deleteAppear;
    animation-duration: 1s;
    animation-fill-mode: backwards;
  }

  @keyframes menuAppear {
    from {
      opacity: 0;
      margin-top: -1000px;
      display: none;
    }
    to {
      opacity: 1;
      display: flex;
    }
  }

  @keyframes menuDisappear {
    from {
      opacity: 1;
      display: flex;
    }
    to {
      opacity: 0;
      margin-top: -1000px;
      display: none;
    }
  }

  .menu-animate {
    animation-name: menuAppear;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  .menu-animate2 {
    animation-name: menuDisappear;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  nav {
    display: none;

    @media (min-width: 1440px) {
      display: flex;
      width: 85%;
      justify-content: space-between;

      .flex-wrapper {
        display: flex;
        border-right: 1px solid #1e2d3d;
      }
    }
  }

  .active {
    border-bottom: 3px solid #fea55f;
    animation-name: borderActive;
    animation-duration: 1s;
  }
  .inActive {
    &:hover {
      opacity: 0.5;
      scale: 0.9;
      transition: 1s;
    }
  }
`;

const StyledLink = styled(Link)`
  border-left: 1px solid #1e2d3d;
  padding: 16px 30px;

  @keyframes borderActive {
    0% {
      opacity: 0.5;
      scale: 0.9;
    }
    100% {
      opacity: 1;
      scale: 1;
    }
  }
`;
