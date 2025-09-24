export type Translation = {
  home: {
    title: string;
    subtitle: string;
    targetJob: string;
  };
  navigation: {
    en: string;
    kr: string;
  };
  skill: {
    title: string;
    language: {
      title: string;
      items: string[];
    };
    frameworks: {
      title: string;
      items: string[];
    };
    databases: {
      title: string;
      items: string[];
    };
    "DevOps/Infra": {
      title: string;
      items: string[];
    };
  };
  experience: {
    title: string;
    content: string;
    content2: string;
  };
  etc: {
    title: string;
    license: {
      title: string;
      items: string[];
    };
  };
  project: {
    title: string;
    items: {
      title: string;
      description: string;
      image: string;
      tags: string[];
      github: string;
    }[];
  };
};
