import { DOCUMENT, computed, effect, inject, Injectable, signal } from '@angular/core';
import { EN } from '../i18n/en';
import { PT_BR } from '../i18n/pt-br';
import { HTML_LANG, Language, SUPPORTED_LANGUAGES, Translations } from '../i18n/translations.model';

export type { Language, Translations } from '../i18n/translations.model';

export const TRANSLATIONS: Record<Language, Translations> = {
  'EN': EN,
  'PT-BR': PT_BR,
};

const STORAGE_KEY = 'portfolio_language';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly document = inject(DOCUMENT);

  readonly languages: readonly Language[] = SUPPORTED_LANGUAGES;

  readonly currentLanguage = signal<Language>(this.getInitialLanguage());

  readonly t = computed(() => TRANSLATIONS[this.currentLanguage()]);

  constructor() {
    // Mantém o atributo lang do <html> sincronizado (acessibilidade/SEO)
    effect(() => {
      this.document.documentElement.lang = HTML_LANG[this.currentLanguage()];
    });
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, language);
      } catch {
        // Ignora erros de quota ou restrição de storage
      }
    }
  }

  private getInitialLanguage(): Language {
    if (typeof localStorage !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && (SUPPORTED_LANGUAGES as readonly string[]).includes(saved)) {
          return saved as Language;
        }
      } catch {
        // Ignora erros de acesso a localStorage
      }
    }
    return 'EN';
  }
}
