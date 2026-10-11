import { Translations } from './translations.model';

export const EN: Translations = {
  nav: {
    home: 'home',
    works: 'works',
    aboutMe: 'about-me',
    contacts: 'contacts',
    selectLanguage: 'Select language',
    mainNavigation: 'Main navigation',
  },
  // TODO: preencher com os textos finais da página "About me"
  aboutMe: {
    title: 'about-me',
    subtitle: 'Who am i?',
    greeting: "Hello, i'm Luiz Felipe!",
    paragraphs: [],
    readMore: 'Read more',
    skills: {
      title: 'skills',
      languages: 'Languages',
      frameworks: 'Frameworks',
      databases: 'Databases',
      tools: 'Tools',
      other: 'Other',
    },
    funFacts: {
      title: 'my-fun-facts',
      items: [],
    },
  },
  contacts: {
    title: 'contacts',
    subtitle: 'Who am i?',
    description:
      "I am always open to networking. If you have any questions, want to connect, or just want to say hi, please don't hesitate to contact me.",
  },
  contactBox: {
    title: 'Message me here',
  },
  footer: {
    role: 'Full Stack Developer',
  },
  social: {
    githubAria: "Luiz Felipe Melo's GitHub profile",
    linkedinAria: "Luiz Felipe Melo's LinkedIn profile",
    sidebarAria: 'Social profiles',
  },
};
