import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CONTACT_INFO } from '../../constants/contact-info';
import { Language, TranslationService } from '../../services/translation.service';

interface NavItem {
  readonly label: string;
  readonly path: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'onEscape()',
  },
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly translationService = inject(TranslationService);

  readonly contactInfo = CONTACT_INFO;
  readonly t = this.translationService.t;
  readonly social = computed(() => this.translationService.t().social);
  readonly selectedLanguage = this.translationService.currentLanguage;
  readonly languages = this.translationService.languages;
  readonly isLanguageMenuOpen = signal(false);
  readonly isMobileLanguageMenuOpen = signal(false);
  readonly isMobileMenuOpen = signal(false);

  readonly navItems = computed<readonly NavItem[]>(() => [
    { label: this.t().nav.home, path: '/home' },
    { label: this.t().nav.works, path: '/works' },
    { label: this.t().nav.aboutMe, path: '/about-me' },
    { label: this.t().nav.contacts, path: '/contacts' },
  ]);

  toggleLanguageMenu(): void {
    this.isLanguageMenuOpen.update((isOpen) => !isOpen);
  }

  toggleMobileLanguageMenu(): void {
    this.isMobileLanguageMenuOpen.update((isOpen) => !isOpen);
  }

  selectLanguage(language: Language): void {
    this.translationService.setLanguage(language);
    this.closeLanguageMenu();
    this.isMobileLanguageMenuOpen.set(false);
  }

  closeLanguageMenu(): void {
    this.isLanguageMenuOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((isOpen) => !isOpen);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    this.isMobileLanguageMenuOpen.set(false);
  }

  onEscape(): void {
    this.closeLanguageMenu();
    this.closeMobileMenu();
  }

  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.closeLanguageMenu();
    }
  }
}

export { Header as NavbarComponent };
