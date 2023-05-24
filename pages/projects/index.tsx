import Head from "next/head";
import {
  PaleText,
  PurpleText,
  WhiteText,
} from "@/styled-components/StyledTexts";
import styled from "styled-components";
import StyledFolders from "@/styled-components/StyledFolders";
import { useContext, useState } from "react";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { MyContext } from "../_app";

export default function projects() {
  const [isProjects, setIsProjects] = useState(true);
  const [techStaks, setTechStacks] = useState<string[]>([]);

  const context = useContext(MyContext);

  const handleCheck = (isChecked: boolean, item: string) => {
    if (isChecked) {
      setTechStacks((prevtechStaks: string[]) => [...prevtechStaks, item]);
    } else {
      setTechStacks((prevtechStaks: string[]) =>
        prevtechStaks.filter((prevtechStak) => prevtechStak !== item)
      );
    }
  };

  const areArraysEqual = (arr1: any[], arr2: any[]): boolean => {
    return arr2.every((element) => arr1.includes(element));
  };

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <StyledProjects>
        <div className="flex-wrapper">
          <WhiteText className="heading">_projects</WhiteText>

          <StyledFolders>
            <div
              onClick={() => {
                setIsProjects(!isProjects);
              }}
              className={isProjects ? "folder active" : "folder"}
            >
              <Image
                width={8.5}
                height={6}
                className="arrow"
                src={"/assets/triangle.png"}
                alt="triangle"
              />
              <WhiteText>TechStacks</WhiteText>
            </div>
            <div
              className={isProjects ? "files active2" : "files active2-reverse"}
            >
              <div
                className={isProjects ? "wrapper" : "wrapper active3-reverse"}
              >
                {context.data.techStacks.map((item) => (
                  <div>
                    <input
                      type="checkbox"
                      id={item}
                      onClick={(event: any) => {
                        handleCheck(event.target.checked, item);
                      }}
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </div>
            </div>
          </StyledFolders>
        </div>

        <div className="main-content">
          <div className="selected">
            <WhiteText>// projects </WhiteText>{" "}
            <PaleText>
              {techStaks.length != 0 && "/" + techStaks.join("; ")}
            </PaleText>
          </div>
          {context.data.projects.map((item) => {
            if (techStaks.length == 0) {
              return (
                <>
                  <div className="project-heading">
                    <PurpleText>Project {item.id}</PurpleText>{" "}
                    <PaleText>/ {item.name}</PaleText>
                  </div>

                  <ProjectCard data={item} />
                </>
              );
            } else if (areArraysEqual(item.teckstack, techStaks)) {
              return (
                <>
                  <div className="project-heading">
                    <PurpleText>Project {item.id}</PurpleText>{" "}
                    <PaleText>/ {item.name}</PaleText>
                  </div>

                  <ProjectCard data={item} />
                </>
              );
            }
          })}
        </div>
      </StyledProjects>
    </>
  );
}

const StyledProjects = styled.main`
  height: calc(95.8vh - 57px);
  overflow: hidden;

  @media (min-width: 1440px) {
    display: flex;
  }

  .heading {
    padding: 20px;

    @media (min-width: 1440px) {
      border-right: 1px solid #1e2d3d;
    }
  }

  .files {
    .wrapper {
      flex-direction: column;
      align-items: start;
      gap: 15px;
      transition: 1s;
      div {
        padding: 0;
        gap: 20px;

        input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          width: 18px;
          height: 18px;
        }

        input[type="checkbox"] + label::before {
          content: "";
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 1px solid #607b96;
          background-color: transparent;
          border-radius: 3px;
          margin-right: 15px;
          vertical-align: middle;
        }

        input[type="checkbox"]:checked + label::before {
          background-image: url("./assets/checked.png");
          background-repeat: no-repeat;
          background-position: center;
          background-color: #607b96;
        }
        label {
          font-weight: 200;
          font-size: 16px;
          color: white;
        }
      }
    }

    .active3-reverse {
      margin-top: -200px;
    }
  }

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    .selected {
      width: 100%;
      padding: 0 0 15px 15px;
      p {
        display: inline;
      }
    }
    .project-heading {
      p {
        display: inline;
      }
    }
  }
`;
