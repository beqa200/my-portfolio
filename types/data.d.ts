interface Data {
  name: string;
  personalInfo: string;
  proffesionalInfo: string;
  techStacks: string[];
  projects: Project[];
}

interface Project {
  id: number;
  name: string;
  description: string;
  teckstack: string;
  img: string;
  liveLink: string;
  githubLink: string;
}
