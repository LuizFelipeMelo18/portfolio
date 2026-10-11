import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectCard] }).compileComponents();
    fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput('technologies', 'Angular TypeScript');
    fixture.componentRef.setInput('title', 'Portfolio');
    fixture.componentRef.setInput('description', 'My personal website');
    fixture.componentRef.setInput('githubLink', 'https://github.com/LuizFelipeMelo18/portfolio');
    fixture.detectChanges();
  });

  it('should render inputs and link to github', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.project-card__techs')?.textContent).toContain('Angular TypeScript');
    expect(el.querySelector('.project-card__title')?.textContent).toContain('Portfolio');
    expect(el.querySelector('.project-card__description')?.textContent).toContain('My personal website');
    const link = el.querySelector<HTMLAnchorElement>('.project-card__button');
    expect(link?.getAttribute('href')).toBe('https://github.com/LuizFelipeMelo18/portfolio');
    expect(link?.getAttribute('target')).toBe('_blank');
    expect(link?.textContent).toContain('Github');
  });
});
