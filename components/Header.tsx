import { PaleText } from "@/styled-components/StyledTexts";
import styled from "styled-components";
import Image from "next/image";
import { useContext } from "react";
import { MyContext } from "@/pages/_app";
import Menu from "./Menu";
export default function Header() {
  const context = useContext(MyContext);
  return (
    <StyledHeader>
      <PaleText>beka-maisuradze</PaleText>

      <Image
        className={context.menu ? "icon-animate" : "icon-animate2"}
        width={16}
        height={16}
        src={!context.menu ? "/assets/hamburger.png" : "/assets/delete.png"}
        alt="menu"
        onClick={() => context.setMenu(!context.menu)}
      />

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
`;
