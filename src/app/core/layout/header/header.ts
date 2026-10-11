import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Language, TranslationService } from '../../services/translation.service';

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
  private readonly translationService = inject(TranslationService);

  protected readonly t = this.translationService.t;
  protected readonly selectedLanguage = this.translationService.currentLanguage;
  protected readonly languages = this.translationService.languages;
  protected readonly isLanguageMenuOpen = signal(false);

  protected readonly navItems = computed<readonly NavItem[]>(() => [
    { label: this.t().nav.home, path: '/home' },
    { label: this.t().nav.works, path: '/works' },
    { label: this.t().nav.aboutMe, path: '/about-me' },
    { label: this.t().nav.contacts, path: '/contacts' },
  ]);

  protected toggleLanguageMenu(): void {
    this.isLanguageMenuOpen.update((isOpen) => !isOpen);
  }

  protected selectLanguage(language: Language): void {
    this.translationService.setLanguage(language);
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

export { Header as NavbarComponent };
