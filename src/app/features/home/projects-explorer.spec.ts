import { TestBed } from '@angular/core/testing';
import { portfolioProjects } from '../../core/data/projects';
import { PT_BR } from '../../core/i18n/pt-br';
import { ProjectsExplorer } from './projects-explorer';

describe('ProjectsExplorer', () => {
  const sampleProjects = portfolioProjects(PT_BR.works.projects);

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectsExplorer] }).compileComponents();
  });

  it('renders a folder tree under projetos and shows a dedicated summary when clicking each folder', () => {
    const fixture = TestBed.createComponent(ProjectsExplorer);
    fixture.componentRef.setInput('projects', sampleProjects);
    fixture.componentRef.setInput('isPt', true);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('.explorer-tree__root')?.textContent).toContain('projetos');

    const folderButtons = Array.from(host.querySelectorAll<HTMLButtonElement>('.explorer-tree__node'));
    expect(folderButtons.map((button) => button.textContent?.trim())).toEqual(['Portfolio', 'StartingCoding', 'Movies Lab']);

    expect(host.querySelector('.explorer-summary__heading h2')?.textContent).toContain('Portfolio');
    expect(host.querySelector<HTMLAnchorElement>('.explorer-summary__repo-link')?.href).toBe('https://github.com/LuizFelipeMelo18/portfolio');

    folderButtons[1].click();
    fixture.detectChanges();
    expect(host.querySelector('.explorer-summary__heading h2')?.textContent).toContain('StartingCoding');
    expect(host.querySelector('.explorer-summary__description')?.textContent).toContain('Plataforma educacional');
    expect(host.querySelector<HTMLAnchorElement>('.explorer-summary__repo-link')?.href).toBe('https://github.com/LuizFelipeMelo18/StartaindCoding');
    expect(host.querySelector('.explorer__breadcrumb')?.textContent).toContain('starting-coding');

    folderButtons[2].click();
    fixture.detectChanges();
    expect(host.querySelector('.explorer-summary__heading h2')?.textContent).toContain('Movies Lab');
    expect(host.querySelector<HTMLAnchorElement>('.explorer-summary__repo-link')?.href).toBe('https://github.com/LuizFelipeMelo18/Movies-Lab');
    fixture.destroy();
  });

  it('collapses and expands the root folder and supports returning to the root directory view', () => {
    const fixture = TestBed.createComponent(ProjectsExplorer);
    fixture.componentRef.setInput('projects', sampleProjects);
    fixture.componentRef.setInput('isPt', false);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('.explorer-tree__root')?.textContent).toContain('projects');

    (host.querySelector('.explorer-tree__root') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(host.querySelectorAll('.explorer-tree__node').length).toBe(0);

    (host.querySelector('.explorer__crumb--link') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(host.querySelectorAll('.explorer-tree__node').length).toBe(3);
    expect(host.querySelectorAll('.explorer-overview__card').length).toBe(3);

    (host.querySelectorAll<HTMLButtonElement>('.explorer-overview__card')[1]).click();
    fixture.detectChanges();
    expect(host.querySelector('.explorer-summary__heading h2')?.textContent).toContain('StartingCoding');
    fixture.destroy();
  });
});
