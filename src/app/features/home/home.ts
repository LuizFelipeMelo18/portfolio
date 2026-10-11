import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialSidebar } from '../../core/layout/social-sidebar/social-sidebar';
import { TranslationService } from '../../core/services/translation.service';
import { ContactBoxComponent } from '../../shared/components/contact-box/contact-box';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card';
import { SkillsBoxComponent } from '../../shared/components/skills-box/skills-box';

export interface ProjectItem {
  readonly title: string;
  readonly technologies: string;
  readonly description: string;
  readonly githubLink: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SocialSidebar,
    ProjectCardComponent,
    SkillsBoxComponent,
    ContactBoxComponent,
    RouterLink,
  ],
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

  /**
   * 5 blocos de habilidades com os dados reais do Luiz
   * organizados para renderização no layout assimétrico.
   */
  protected readonly skillGroups = computed(() => {
    const s = this.t().aboutMe.skills;
    return {
      languages: {
        title: s.languages,
        items: ['Java', 'JavaScript', 'TypeScript', 'Kotlin'],
      },
      databases: {
        title: s.databases,
        items: ['PostgreSQL', 'MySQL'],
      },
      other: {
        title: s.other,
        items: ['REST APIs', 'SOLID', 'Clean Code', 'DDD', 'Hexagonal Architecture'],
      },
      tools: {
        title: s.tools,
        items: [
          'Git',
          'Docker',
          'Linux',
          'GitHub Actions',
          'AWS',
          'RabbitMQ',
          'Apache Kafka',
          'JUnit',
          'Mockito',
        ],
      },
      frameworks: {
        title: s.frameworks,
        items: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Angular', 'React'],
      },
    };
  });
}

export { Home as HomeComponent };
