import type { Translation } from "./types";

const en: Translation = {
  home: {
    title: "Song Chan Young",
    subtitle:
      "A developer interested in web and game development. Primarily works on backend, highly interested in leveraging LLMs and conducting research and development. The goal is to build games powered by LLMs.",
    targetJob:
      "Backend Developer, LLM Application Developer, Prompt Engineer, Context Engineer",
  },
  navigation: {
    en: "English",
    kr: "Korean",
  },
  skill: {
    title: "Tech Stack",
    language: {
      title: "Main Languages",
      items: ["Python"],
    },
    frameworks: {
      title: "Main Frameworks",
      items: ["FastAPI", "Streamlit", "LangChain", "LangGraph"],
    },
    databases: {
      title: "Database Experience",
      items: ["MySQL", "Firebase Firestore"],
    },
    "DevOps/Infra": {
      title: "DevOps/Infra Experience",
      items: ["Docker", "Docker Compose"],
    },
  },
  experience: {
    title: "Experience/Education",
    content:
      "Soonchunhyang University — Computer Software Engineering, enrolled in 2020",
    content2: "Currently 4th year",
  },
  etc: {
    title: "Others",
    license: {
      title: "Certificates",
      items: [
        "Information Processing Engineer",
        "Industrial Engineer Information Processing",
        "Information Processing Engineer",
      ],
    },
  },
  project: {
    title: "Projects",
    items: [
      {
        title: "Project 1",
        description: "Project 1 Description",
        image: "images/ex1.png", //public/images/ex1.png
        tags: ["Python", "FastAPI", "React"],
        github: "https://github.com/scy0416/deque_card_game",
      },
      {
        title: "Project 2",
        description: "Project 2 Description",
        image: "images/ex2.png", //public/images/ex2.png
        tags: ["Python", "FastAPI", "React"],
        github: "https://github.com/scy0416/image_mosaic",
      },
    ],
  },
};

export default en;
