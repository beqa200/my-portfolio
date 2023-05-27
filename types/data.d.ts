interface Data {
  position: string;
  personalInfo: string;
  proffesionalInfo: string;
  techStacks: string[];
  social: Social[];
  projects: Project[];
  skills: Skill[];
}

interface Project {
  id: number;
  name: string;
  description: string;
  teckstack: string[];
  img: string;
  liveLink: string;
  githubLink: string;
}

interface Social {
  name: string;
  link: string;
}

interface Skill {
  name: string;
  logo: string;
}
