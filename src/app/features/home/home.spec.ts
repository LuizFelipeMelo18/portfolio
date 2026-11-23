import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';
import { TranslationService } from '../../core/services/translation.service';

describe('Desktop home', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Home], providers: [provideRouter([])] }).compileComponents();
    TestBed.inject(TranslationService).setLanguage('PT-BR');
  });

  it('starts as a desktop with nine app icons and an empty taskbar', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelectorAll('.desktop-icon').length).toBe(9);
    expect(host.querySelectorAll('.desktop-icon__tile img').length).toBe(9);
    expect(host.querySelectorAll('.app-window').length).toBe(0);
    expect(host.querySelectorAll('.taskbar__window').length).toBe(0);
    expect(host.querySelector('.taskbar__time')?.textContent).toMatch(/\d{2}\/\d{2}\/\d{4}/);
    fixture.destroy();
  });

  it('opens multiple windows and tracks them beside the system logo', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    (host.querySelector('[aria-label="Abrir Sobre"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(host.querySelector('.about-content')?.textContent).toContain('Java, Kotlin e Spring Boot');
    expect(host.querySelectorAll('.taskbar__window').length).toBe(1);
    (host.querySelector('[aria-label="Abrir Projetos"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(host.querySelectorAll('.app-window').length).toBe(2);
    expect(host.querySelectorAll('.taskbar__window').length).toBe(2);
    fixture.destroy();
  });

  it('opens each of the nine desktop apps in its own window', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    for (const icon of Array.from(host.querySelectorAll<HTMLButtonElement>('.desktop-icon'))) {
      icon.click();
      fixture.detectChanges();
    }
    expect(host.querySelectorAll('.app-window').length).toBe(9);
    expect(host.querySelectorAll('.taskbar__window').length).toBe(9);
    fixture.destroy();
  });

  it('minimizes, restores and closes a window', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    (host.querySelector('[aria-label="Abrir Sobre"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    (host.querySelector('[aria-label="Minimizar Sobre"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(host.querySelector('.app-window')).toBeNull();
    (host.querySelector('[aria-label="Mostrar Sobre"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(host.querySelector('.app-window')).toBeTruthy();
    (host.querySelector('[aria-label="Maximizar Sobre"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(host.querySelector('.app-window--maximized')).toBeTruthy();
    (host.querySelector('[aria-label="Fechar Sobre"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(host.querySelectorAll('.taskbar__window').length).toBe(0);
    fixture.destroy();
  });

  it('opens apps from the system menu and changes language', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    (host.querySelector('.taskbar__system') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(host.querySelectorAll('.app-menu__list button').length).toBe(9);
    (host.querySelector('.app-menu__list button') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(host.querySelector('.app-window')).toBeTruthy();
    expect(host.querySelector('.app-menu')).toBeNull();
    (host.querySelector('.taskbar__languages button:last-child') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(host.querySelector('[aria-label="Abrir About"]')).toBeTruthy();
    fixture.destroy();
  });

  it('changes the desktop wallpaper and remembers the choice', () => {
    const previous = localStorage.getItem('portfolio-wallpaper');
    try {
      localStorage.removeItem('portfolio-wallpaper');
      const fixture = TestBed.createComponent(Home);
      fixture.detectChanges();
      const host = fixture.nativeElement as HTMLElement;
      (host.querySelector('[aria-label="Abrir Personalizar"]') as HTMLButtonElement).click();
      fixture.detectChanges();
      expect(host.querySelectorAll('.wallpaper-option').length).toBe(8);

      (host.querySelector('[aria-label="Selecionar Oceano"]') as HTMLButtonElement).click();
      fixture.detectChanges();
      expect((host.querySelector('.desktop') as HTMLElement).style.backgroundImage).toContain('/wallpapers/ocean.png');
      expect(host.querySelector('[aria-label="Selecionar Oceano"]')?.getAttribute('aria-pressed')).toBe('true');
      expect(localStorage.getItem('portfolio-wallpaper')).toBe('ocean');
      fixture.destroy();

      const reloaded = TestBed.createComponent(Home);
      reloaded.detectChanges();
      expect((reloaded.nativeElement as HTMLElement).querySelector<HTMLElement>('.desktop')?.style.backgroundImage).toContain('/wallpapers/ocean.png');
      reloaded.destroy();
    } finally {
      if (previous === null) localStorage.removeItem('portfolio-wallpaper');
      else localStorage.setItem('portfolio-wallpaper', previous);
    }
  });

  it('opens a desktop context menu and launches an app from it', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    const desktop = host.querySelector('.desktop') as HTMLElement;
    const event = new MouseEvent('contextmenu', { bubbles: true, cancelable: true, clientX: 120, clientY: 100 });
    desktop.dispatchEvent(event);
    fixture.detectChanges();
    expect(event.defaultPrevented).toBe(true);
    expect(host.querySelectorAll('.desktop-context-menu [role="menuitem"]').length).toBe(4);
    (host.querySelector('.desktop-context-menu [role="menuitem"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(host.querySelector('.about-content')).toBeTruthy();
    expect(host.querySelector('.desktop-context-menu')).toBeNull();
    fixture.destroy();
  });

  it('resizes a window from its right and bottom edges', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    (host.querySelector('[aria-label="Abrir Projetos"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    const windowElement = host.querySelector('.app-window') as HTMLElement;
    const initialWidth = parseInt(windowElement.style.width, 10);
    const initialHeight = parseInt(windowElement.style.height, 10);
    (host.querySelector('.app-window__resize--w') as HTMLElement).dispatchEvent(new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0, clientX: 300, clientY: 300 }));
    document.dispatchEvent(new MouseEvent('pointermove', { bubbles: true, clientX: 240, clientY: 300 }));
    document.dispatchEvent(new MouseEvent('pointerup', { bubbles: true }));
    fixture.detectChanges();
    expect(parseInt(windowElement.style.width, 10)).toBeGreaterThan(initialWidth);
    (host.querySelector('.app-window__resize--s') as HTMLElement).dispatchEvent(new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0, clientX: 500, clientY: 500 }));
    document.dispatchEvent(new MouseEvent('pointermove', { bubbles: true, clientX: 500, clientY: 550 }));
    document.dispatchEvent(new MouseEvent('pointerup', { bubbles: true }));
    fixture.detectChanges();
    expect(parseInt(windowElement.style.height, 10)).toBeGreaterThan(initialHeight);
    fixture.destroy();
  });
});
