import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type Language = 'EN' | 'PT-BR';

interface NavItem {
  readonly label: string;
  readonly path: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'closeLanguageMenu()',
  },
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly navItems: readonly NavItem[] = [
    { label: 'home', path: '/home' },
    { label: 'works', path: '/works' },
    { label: 'about-me', path: '/about-me' },
    { label: 'contacts', path: '/contacts' },
  ];

  protected readonly languages: readonly Language[] = ['EN', 'PT-BR'];
  protected readonly selectedLanguage = signal<Language>('EN');
  protected readonly isLanguageMenuOpen = signal(false);

  protected toggleLanguageMenu(): void {
    this.isLanguageMenuOpen.update((isOpen) => !isOpen);
  }

  protected selectLanguage(language: Language): void {
    this.selectedLanguage.set(language);
    this.closeLanguageMenu();
  }

  protected closeLanguageMenu(): void {
    this.isLanguageMenuOpen.set(false);
  }

  protected onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.closeLanguageMenu();
    }
  }
}
