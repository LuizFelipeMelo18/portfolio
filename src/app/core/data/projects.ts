import { Translations } from '../i18n/translations.model';

export interface PortfolioProject {
  readonly title: string;
  readonly technologies: string;
  readonly description: string;
  readonly githubLink: string;
}

export function portfolioProjects(descriptions: Translations['works']['projects']): readonly PortfolioProject[] {
  return [
    {
      title: 'Portfolio',
      technologies: 'Angular · TypeScript',
      description: descriptions.portfolio,
      githubLink: 'https://github.com/LuizFelipeMelo18/portfolio',
    },
    {
      title: 'StartingCoding',
      technologies: 'React · TypeScript · Spring Boot · Docker',
      description: descriptions.startingCoding,
      githubLink: 'https://github.com/LuizFelipeMelo18/StartaindCoding',
    },
    {
      title: 'Movies Lab',
      technologies: 'React · TypeScript',
      description: descriptions.moviesLab,
      githubLink: 'https://github.com/LuizFelipeMelo18/Movies-Lab',
    },
  ];
}
