import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../core/layout/footer/footer';
import { SocialSidebar } from '../../core/layout/social-sidebar/social-sidebar';
import { TranslationService } from '../../core/services/translation.service';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card';

export interface ProjectItem {
  readonly title: string;
  readonly technologies: string;
  readonly description: string;
  readonly githubLink: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Footer, SocialSidebar, ProjectCardComponent, RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private readonly translationService = inject(TranslationService);

  protected readonly t = this.translationService.t;

  /**
   * Nomes, tecnologias e links do GitHub dos projetos fixos;
   * as descrições acompanham o serviço de tradução.
   */
  protected readonly projects = computed<readonly ProjectItem[]>(() => {
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

export { Home as HomeComponent };
