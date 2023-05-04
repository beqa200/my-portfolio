import { PaleText } from "@/styled-components/StyledTexts";
import styled from "styled-components";
import Image from "next/image";
export default function Header() {
  return (
    <StyledHeader>
      <PaleText>beka-maisuradze</PaleText>
      <Image width={18} height={16} src={"/assets/hamburger.png"} alt="menu"/>
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
border-bottom: 1px solid #1E2D3D;
`;
