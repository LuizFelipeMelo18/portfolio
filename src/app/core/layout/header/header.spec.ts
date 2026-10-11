import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './header';
import { TranslationService } from '../../services/translation.service';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let translationService: TranslationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([{ path: 'home', component: Header }])],
    }).compileComponents();

    translationService = TestBed.inject(TranslationService);
    translationService.setLanguage('EN');

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update navigation items when language changes', async () => {
    fixture.detectChanges();
    let compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('#contacts');

    translationService.setLanguage('PT-BR');
    fixture.detectChanges();
    await fixture.whenStable();

    compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('#contatos');
    expect(compiled.textContent).toContain('#início');
  });

  it('should toggle mobile menu when hamburger button is clicked', () => {
    fixture.detectChanges();
    const toggleBtn = fixture.nativeElement.querySelector('#mobile-menu-toggle') as HTMLButtonElement;
    expect(toggleBtn).toBeTruthy();
    expect(component.isMobileMenuOpen()).toBe(false);

    toggleBtn.click();
    fixture.detectChanges();
    expect(component.isMobileMenuOpen()).toBe(true);

    const overlay = fixture.nativeElement.querySelector('.mobile-overlay') as HTMLElement;
    expect(overlay).toBeTruthy();
  });

  it('should close mobile menu when close button is clicked', () => {
    component.toggleMobileMenu();
    fixture.detectChanges();
    expect(component.isMobileMenuOpen()).toBe(true);

    const closeBtn = fixture.nativeElement.querySelector('#mobile-menu-close') as HTMLButtonElement;
    expect(closeBtn).toBeTruthy();

    closeBtn.click();
    fixture.detectChanges();
    expect(component.isMobileMenuOpen()).toBe(false);
  });

  it('should close mobile menu when a navigation link in the overlay is clicked', () => {
    component.toggleMobileMenu();
    fixture.detectChanges();

    const firstNavLink = fixture.nativeElement.querySelector('.mobile-overlay__link') as HTMLAnchorElement;
    expect(firstNavLink).toBeTruthy();

    firstNavLink.click();
    fixture.detectChanges();
    expect(component.isMobileMenuOpen()).toBe(false);
  });

  it('should display GitHub and LinkedIn links in mobile overlay footer', () => {
    component.toggleMobileMenu();
    fixture.detectChanges();

    const github = fixture.nativeElement.querySelector('#mobile-social-github') as HTMLAnchorElement;
    const linkedin = fixture.nativeElement.querySelector('#mobile-social-linkedin') as HTMLAnchorElement;

    expect(github).toBeTruthy();
    expect(github.href).toContain('github.com');
    expect(linkedin).toBeTruthy();
    expect(linkedin.href).toContain('linkedin.com');
  });

  it('should close mobile menu when Escape key is pressed', () => {
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen()).toBe(true);

    const event = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
    document.dispatchEvent(event);
    expect(component.isMobileMenuOpen()).toBe(false);
  });
});
