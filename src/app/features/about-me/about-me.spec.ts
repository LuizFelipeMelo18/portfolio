import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMe } from './about-me';

describe('AboutMe', () => {
  let component: AboutMe;
  let fixture: ComponentFixture<AboutMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMe],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the page title and subtitle', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('.about-page__title');
    expect(title?.textContent).toContain('/about-me');

    const subtitle = compiled.querySelector('.about-page__subtitle');
    expect(subtitle?.textContent).toContain('Who am i?');
  });

  it('should render the presentation paragraphs', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const paragraphs = compiled.querySelectorAll('.about-page__text p');
    expect(paragraphs.length).toBeGreaterThan(0);
    expect(paragraphs[0]?.textContent).toContain('Luiz');
  });

  it('should render the 5 skills boxes in the skills section', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const skillsTitle = compiled.querySelector('#skills-title');
    expect(skillsTitle?.textContent).toContain('#skills');

    const skillBoxes = compiled.querySelectorAll('app-skills-box');
    expect(skillBoxes.length).toBe(5);

    const titles = Array.from(skillBoxes).map(
      (box) => box.querySelector('.skills-box__title')?.textContent?.trim()
    );
    expect(titles).toContain('Languages');
    expect(titles).toContain('Other');
    expect(titles).toContain('Tools');
    expect(titles).toContain('Databases');
    expect(titles).toContain('Frameworks');
  });

  it('should render the sidebar and the skills grid', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.about-page__sidebar')).toBeTruthy();
    expect(compiled.querySelector('.skills__grid')).toBeTruthy();
  });
});
