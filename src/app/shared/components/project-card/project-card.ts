import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Card reutilizável de projeto: tecnologias no topo, título + descrição no corpo
 * e botão "Github <~>" que abre o repositório em nova aba.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-project-card',
  styleUrl: './project-card.css',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  @Input({ required: true }) technologies = '';
  @Input({ required: true }) title = '';
  @Input() description = '';
  @Input({ required: true }) githubLink = '';
}

export { ProjectCard as ProjectCardComponent };
