import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SocialSidebar } from '../../core/layout/social-sidebar/social-sidebar';
import { TranslationService } from '../../core/services/translation.service';
import { ProjectCard } from '../../shared/components/project-card/project-card';

interface Project {
  readonly title: string;
  readonly technologies: string;
  readonly description: string;
  readonly githubLink: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCard, SocialSidebar],
  selector: 'app-works',
  styleUrl: './works.css',
  templateUrl: './works.html',
})
export class Works {
  protected readonly t = inject(TranslationService).t;

  /** Nomes e tecnologias são fixos; apenas as descrições vêm da tradução. */
  protected readonly projects = computed<readonly Project[]>(() => {
    const d = this.t().works.projects;
    return [
      {
        title: 'Portfolio',
        technologies: 'Angular TypeScript',
        description: d.portfolio,
        githubLink: 'https://github.com/LuizFelipeMelo18/portfolio',
      },
      {
        title: 'StartingCoding',
        technologies: 'React TypeScript Spring Boot Docker',
        description: d.startingCoding,
        githubLink: 'https://github.com/LuizFelipeMelo18/StartaindCoding',
      },
      {
        title: 'Movies Lab',
        technologies: 'React TypeScript',
        description: d.moviesLab,
        githubLink: 'https://github.com/LuizFelipeMelo18/Movies-Lab',
      },
    ];
  });
}

export { Works as WorksComponent };
