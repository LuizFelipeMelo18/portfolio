import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Caixa reutilizável que exibe uma categoria de habilidades
 * (ex.: "Databases") e sua lista de itens (ex.: PostgreSQL, MySQL).
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-skills-box',
  styleUrl: './skills-box.css',
  templateUrl: './skills-box.html',
})
export class SkillsBox {
  @Input({ required: true }) title = '';
  @Input() skills: readonly string[] = [];
}

export { SkillsBox as SkillsBoxComponent };
