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
        src={!context.menu ? "/assets/hamburger.png" : "/assets/delete.png"}
        alt="menu"
        onClick={() => context.setMenu(!context.menu)}
      />

      <nav>
        <div className="flex-wrapper">
          <Link
            href="/"
            style={path == "/" ? { borderBottom: "3px solid  #FEA55F" } : {}}
          >
            <PaleText>_hello</PaleText>
          </Link>
          <Link
            href="/about"
            style={
              path == "/about" ? { borderBottom: "3px solid  #FEA55F" } : {}
            }
          >
            <PaleText>_about_me</PaleText>
          </Link>
          <Link
            href="/projects"
            style={
              path == "/projects" ? { borderBottom: "3px solid  #FEA55F" } : {}
            }
          >
            <PaleText>_projects</PaleText>
          </Link>
        </div>
        <Link
          href="/contact-me"
          className="contact"
          style={
            path == "/contact-me" ? { borderBottom: "3px solid  #FEA55F" } : {}
          }
        >
          <PaleText>_contact-me</PaleText>
        </Link>
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

  @media (min-width: 1300px) {
    justify-content: space-between;
    gap: 100px;
    padding-right: 0;
  }

  .name {
    @media (min-width: 1300px) {
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
    @media (min-width: 1300px) {
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

    a {
      border-left: 1px solid #1e2d3d;

      padding: 16px 30px;
    }

    .contact {
    }
    @media (min-width: 1300px) {
      display: flex;
      width: 85%;
      justify-content: space-between;

      .flex-wrapper {
        display: flex;
        border-right: 1px solid #1e2d3d;
      }
    }
  }
`;
