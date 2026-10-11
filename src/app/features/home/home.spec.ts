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

  it('should render skills section with #skills, 5 skills boxes, and geometric decorations', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const skillsTitle = compiled.querySelector('#skills-title');
    expect(skillsTitle?.textContent).toContain('#');
    expect(skillsTitle?.textContent).toContain('skills');

    const skillBoxes = compiled.querySelectorAll('app-skills-box');
    expect(skillBoxes.length).toBe(5);

    const titles = Array.from(skillBoxes).map(
      (box) => box.querySelector('.skills-box__title')?.textContent?.trim()
    );
    expect(titles).toContain('Languages');
    expect(titles).toContain('Databases');
    expect(titles).toContain('Other');
    expect(titles).toContain('Tools');
    expect(titles).toContain('Frameworks');

    expect(compiled.querySelector('.skills__decor')).toBeTruthy();
  });

  it('should render about-me section with #about-me, presentation text, and "Read more ->" button', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const aboutTitle = compiled.querySelector('#about-title');
    expect(aboutTitle?.textContent).toContain('#');
    expect(aboutTitle?.textContent).toContain('about-me');

    expect(compiled.querySelector('.about__greeting')?.textContent).toContain("Hello, i'm Luiz Felipe!");

    const readMoreBtn = compiled.querySelector('#about-read-more-button');
    expect(readMoreBtn).toBeTruthy();
    expect(readMoreBtn?.getAttribute('routerlink') || readMoreBtn?.getAttribute('href')).toBeTruthy();
    expect(readMoreBtn?.textContent).toContain('Read more ->');
  });

  it('should render contacts section with #contacts, networking text, and ContactBoxComponent', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const contactsTitle = compiled.querySelector('#contacts-title');
    expect(contactsTitle?.textContent).toContain('#');
    expect(contactsTitle?.textContent).toContain('contacts');

    expect(compiled.querySelector('.contacts__text')?.textContent).toContain(
      'I am always open to networking'
    );
    expect(compiled.querySelector('app-contact-box')).toBeTruthy();
  });

  it('should update section titles when changing language to PT-BR', async () => {
    translationService.setLanguage('PT-BR');
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#skills-title')?.textContent).toContain('habilidades');
    expect(compiled.querySelector('#about-title')?.textContent).toContain('sobre-mim');
    expect(compiled.querySelector('#contacts-title')?.textContent).toContain('contatos');
    expect(compiled.querySelector('#about-read-more-button')?.textContent).toContain('Saiba mais ->');
  });
});
