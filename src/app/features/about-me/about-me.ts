import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SocialSidebar } from '../../core/layout/social-sidebar/social-sidebar';
import { TranslationService } from '../../core/services/translation.service';
import { SkillsBox } from '../../shared/components/skills-box/skills-box';

interface SkillGroup {
  readonly title: string;
  readonly items: readonly string[];
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkillsBox, SocialSidebar],
  selector: 'app-about-me',
  styleUrl: './about-me.css',
  templateUrl: './about-me.html',
})
export class AboutMe {
  protected readonly t = inject(TranslationService).t;

  /** 5 blocos, na mesma ordem da referência. Títulos traduzidos; nomes técnicos fixos. */
  protected readonly skillGroups = computed<readonly SkillGroup[]>(() => {
    const s = this.t().aboutMe.skills;
    return [
      { title: s.languages, items: ['Java', 'JavaScript', 'TypeScript', 'Kotlin'] },
      {
        title: s.other,
        items: ['REST APIs', 'SOLID', 'Clean Code', 'DDD', 'Hexagonal Architecture'],
      },
      {
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
      { title: s.databases, items: ['PostgreSQL', 'MySQL'] },
      {
        title: s.frameworks,
        items: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Angular', 'React'],
      },
    ];
  });
}

export { AboutMe as AboutMeComponent };
