import styled from "styled-components";
import Image from "next/image";
import { PaleText } from "@/styled-components/StyledTexts";
import StyledButton from "@/styled-components/StyledButton";
import { useContext, useState } from "react";
import { MyContext } from "@/pages/_app";
export default function ProjectCard({ data }: { data: Project }) {
  const context = useContext(MyContext);
  const [isHover, setIsHover] = useState(false);
  return (
    <StyledProjectCard onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
      <Image
        width={500}
        height={500}
        src={data.img}
        alt=""
        className="main-img"
      />
      <div className="wrapper">
        <PaleText>{data.name}</PaleText>
        <div className="links">
          <StyledButton>
            <a href={data.liveLink} target="_blank">
              view-project
            </a>
          </StyledButton>

          <a href={data.githubLink} target="_blank">
            <Image
              width={200}
              height={200}
              src={"/assets/contact-icons/github.svg"}
              alt=""
            />
          </a>
        </div>
      </div>
      {isHover && <div className="hover">
        {data.teckstack.map(
          (item) =>
            context.data.skills.find((item1) => item1.name == item) && (
              <img
                src={
                  context.data.skills.find((item1) => item1.name == item)?.logo
                }
              />
            )
        )}
      </div>}
    </StyledProjectCard>
  );
}

const StyledProjectCard = styled.div`
  background-color: #011221;
  border: 2px solid #1c2b3a;
  width: 100%;
  border-radius: 15px;
  animation-name: scaleUp;
  animation-duration: 1s;
  position: relative;
  @media (min-width: 1440px) {
    &:hover {
      scale: 1.05;
      transition: 1s;
    }
  }

  @keyframes scaleUp {
    0% {
      scale: 0.2;
    }
    100% {
      scale: 1;
    }
  }

  .main-img {
    width: 100%;
    height: 200px;
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

        @media (min-width: 1440px) {
          &:hover {
            scale: 1.2;
            transition: 1s;
          }
        }
      }
    }
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-color: black;
    opacity: 0.7;
    border-radius: 15px 15px 0px 0px;
  }
  .hover {
    @keyframes imgAnimation {
    0% {
      scale: 0.6;
    }

    50% {
      scale: 1;
    }

    100% {
      scale: 0.6;
    }
  }

    position: absolute;
    width: 100%;
    height: 200px;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    img {
      width: 50px;
      animation: imgAnimation infinite 2s;
      
    }
  }
`;
