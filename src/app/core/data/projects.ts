import { Translations } from '../i18n/translations.model';

export interface PortfolioProject {
  readonly id: string;
  readonly folder: string;
  readonly title: string;
  readonly technologies: string;
  readonly stack: readonly string[];
  readonly description: string;
  readonly githubLink: string;
  readonly repoName: string;
}

export function portfolioProjects(descriptions: Translations['works']['projects']): readonly PortfolioProject[] {
  return [
    {
      id: 'portfolio',
      folder: 'portfolio',
      title: 'Portfolio',
      technologies: 'Angular · TypeScript',
      stack: ['Angular', 'TypeScript'],
      description: descriptions.portfolio,
      githubLink: 'https://github.com/LuizFelipeMelo18/portfolio',
      repoName: 'LuizFelipeMelo18/portfolio',
    },
    {
      id: 'starting-coding',
      folder: 'starting-coding',
      title: 'StartingCoding',
      technologies: 'React · TypeScript · Spring Boot · Docker',
      stack: ['React', 'TypeScript', 'Spring Boot', 'Docker'],
      description: descriptions.startingCoding,
      githubLink: 'https://github.com/LuizFelipeMelo18/StartaindCoding',
      repoName: 'LuizFelipeMelo18/StartaindCoding',
    },
    {
      id: 'movies-lab',
      folder: 'movies-lab',
      title: 'Movies Lab',
      technologies: 'React · TypeScript',
      stack: ['React', 'TypeScript'],
      description: descriptions.moviesLab,
      githubLink: 'https://github.com/LuizFelipeMelo18/Movies-Lab',
      repoName: 'LuizFelipeMelo18/Movies-Lab',
    },
  ];
}
