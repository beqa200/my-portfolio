import { MyContext } from "@/pages/_app";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import Footer from "./Footer";

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
      <Footer />
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
  height: calc(95.8vh - 58px);
  left: 0;
  top: 55px;

  a {
    border-bottom: 1px solid #1e2d3d;
    padding: 17px 14px;
    color: #ffffff;
  }

  @keyframes findAppear {
    from {
      margin-bottom: -1000px;
    }
    to {
      margin-bottom: 0;
      display: flex;
    }
  }

  .find-animate {
    animation-name: findAppear;
    animation-duration: 1.2s;
    animation-fill-mode: backwards;
  }
`;
