import type { Translation } from "./types";

const ko: Translation = {
  home: {
    title: "송찬영",
    subtitle:
      "웹과 게임 개발에 관심 있는 개발자입니다. 백엔드쪽으로 주로 작업을 하며, LLM의 활용에 큰 관심이 있으며 연구 및 개발을 진행하고 있습니다. LLM을 활용한 게임을 만드는 것이 목표입니다.",
    targetJob:
      "백엔드 개발자, LLM 활용 개발자, 프롬프트 엔지니어, 컨텍스트 엔지니어",
  },
  skill: {
    title: "기술 스택",
    language: {
      title: "주요 언어",
      items: ["Python"],
    },
    frameworks: {
      title: "주요 프레임워크",
      items: ["FastAPI", "Streamlit", "Langchain", "Langgraph"],
    },
    databases: {
      title: "데이터베이스 경험",
      items: ["MySQL", "Firebase-firestore"],
    },
    "DevOps/Infra": {
      title: "DevOps/Infra 경험",
      items: ["Docker", "Docker compose"],
    },
  },
  experience: {
    title: "경력/학력",
    content: "순천향대학교-컴퓨터소프트웨어공학과 20년도 입학",
    content2: "현 4학년",
  },
  etc: {
    title: "기타",
    license: {
      title: "자격증",
      items: ["정보처리기사", "정보처리산업기사", "정보처리기사"],
    },
  },
  navigation: {
    kr: "한국어",
    en: "영어",
  },
  project: {
    title: "프로젝트",
    items: [
      {
        title: "프로젝트 1",
        description: "프로젝트 1 설명",
        image: "images/ex1.png",//public/images/ex1.png
        tags: ["Python", "FastAPI", "React"],
        github: "https://github.com/scy0416/deque_card_game",
      },
      {
        title: "프로젝트 2",
        description: "프로젝트 2 설명",
        image: "images/ex2.png",//public/images/ex2.png
        tags: ["Python", "FastAPI", "React"],
        github: "https://github.com/scy0416/image_mosaic",
      },
    ],
  },
};

export default ko;
