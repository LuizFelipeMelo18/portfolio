import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { PortfolioProject } from '../../core/data/projects';

@Component({
  selector: 'app-projects-explorer',
  templateUrl: './projects-explorer.html',
  styleUrl: './projects-explorer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsExplorer {
  readonly projects = input.required<readonly PortfolioProject[]>();
  readonly isPt = input(true);

  protected readonly treeExpanded = signal(true);
  protected readonly selectedId = signal<string | null>(null);

  protected readonly rootFolderName = computed(() => (this.isPt() ? 'projetos' : 'projects'));

  protected readonly selectedProject = computed<PortfolioProject | null>(() => {
    const list = this.projects();
    if (!list.length) return null;
    const currentId = this.selectedId();
    if (currentId === '__root__') return null;
    return list.find((project) => project.id === currentId) ?? list[0];
  });

  protected readonly currentPath = computed(() => {
    const root = `~/dev/${this.rootFolderName()}`;
    const selected = this.selectedProject();
    return selected ? `${root}/${selected.folder}` : root;
  });

  protected toggleRoot(): void {
    this.treeExpanded.update((open) => !open);
  }

  protected openRootOverview(): void {
    this.treeExpanded.set(true);
    this.selectedId.set('__root__');
  }

  protected selectProject(id: string): void {
    this.treeExpanded.set(true);
    this.selectedId.set(id);
  }
}
