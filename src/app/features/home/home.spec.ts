import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';
import { TranslationService } from '../../core/services/translation.service';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;
  let translationService: TranslationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();

    translationService = TestBed.inject(TranslationService);
    translationService.setLanguage('EN');

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Footer at the bottom', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });

  it('should render the vertical social sidebar on the left', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-social-sidebar')).toBeTruthy();
  });

  it('should render the hero section with highlighted title and contact button', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const heroTitle = compiled.querySelector('.hero__title');
    expect(heroTitle?.textContent).toContain('Luiz is a');
    expect(heroTitle?.textContent).toContain('Full Stack Developer');

    const highlight = compiled.querySelector('.hero__highlight');
    expect(highlight?.textContent).toBe('Full Stack Developer');

    const contactBtn = compiled.querySelector('#hero-contact-button');
    expect(contactBtn).toBeTruthy();
    expect(contactBtn?.getAttribute('routerlink') || contactBtn?.getAttribute('href')).toBeTruthy();
    expect(contactBtn?.textContent).toContain('Contact me!!');
  });

  it('should render projects header with #projects and view all link', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('#projects-title');
    expect(title?.textContent).toContain('#');
    expect(title?.textContent).toContain('projects');

    const viewAllLink = compiled.querySelector('#view-all-projects-link');
    expect(viewAllLink).toBeTruthy();
    expect(viewAllLink?.textContent).toContain('View all');
  });

  it('should render the 3 projects with ProjectCardComponent via property binding', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('app-project-card');
    expect(cards.length).toBe(3);

    const titles = Array.from(cards).map(
      (card) => card.querySelector('.project-card__title')?.textContent?.trim()
    );
    expect(titles).toContain('Portfolio');
    expect(titles).toContain('StartingCoding');
    expect(titles).toContain('Movies Lab');
  });
});
