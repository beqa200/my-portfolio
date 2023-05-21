import styled from "styled-components";
import Image from "next/image";
import { PaleText, WhiteText } from "@/styled-components/StyledTexts";
import StyledButton from "@/styled-components/StyledButton";
export default function ProjectCard({ data }: { data: Project }) {
  return (
    <StyledProjectCard>
      <img
        width={200}
        height={200}
        src={data.img}
        alt=""
        className="main-img"
      />
      <div className="wrapper">
        <PaleText>{data.description}</PaleText>
        <div className="links">
          <StyledButton>
            <a href={data.liveLink}>view-project</a>
          </StyledButton>

          <a href={data.githubLink}>
            <Image
              width={200}
              height={200}
              src={"/assets/contact-icons/github.svg"}
              alt=""
            />
          </a>
        </div>
      </div>
    </StyledProjectCard>
  );
}

const StyledProjectCard = styled.div`
  background-color: #011221;
  border: 2px solid #1c2b3a;
  width: 90%;
  max-width: 370px;
  border-radius: 15px;

  .main-img {
    width: 100%;

    border-radius: 15px 15px 0px 0px;
  }

  .wrapper {
    padding: 31px;

    .links {
      margin-top: 23px;
      display: flex;
      justify-content: space-between;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
