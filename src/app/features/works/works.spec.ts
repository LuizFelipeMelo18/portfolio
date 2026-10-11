import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Works } from './works';

describe('Works', () => {
  let component: Works;
  let fixture: ComponentFixture<Works>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Works],
    }).compileComponents();

    fixture = TestBed.createComponent(Works);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the page title and subtitle', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('.works-page__title');
    expect(title?.textContent).toContain('/projects');

    const subtitle = compiled.querySelector('.works-page__subtitle');
    expect(subtitle?.textContent).toContain('List of my projects');
  });

  it('should render the section header and 3 project cards', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const sectionTitle = compiled.querySelector('#projects-title');
    expect(sectionTitle?.textContent).toContain('#projects');

    const cards = compiled.querySelectorAll('app-project-card');
    expect(cards.length).toBe(3);

    const titles = Array.from(cards).map(
      (card) => card.querySelector('.project-card__title')?.textContent?.trim()
    );
    expect(titles).toContain('Portfolio');
    expect(titles).toContain('StartingCoding');
    expect(titles).toContain('Movies Lab');
  });

  it('should render the sidebar and the projects grid', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.works-page__sidebar')).toBeTruthy();
    expect(compiled.querySelector('.projects__grid')).toBeTruthy();
  });
});
