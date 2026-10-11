import { computed, Injectable, signal } from '@angular/core';

export type Language = 'EN' | 'PT-BR';

export interface Translations {
  readonly nav: {
    readonly home: string;
    readonly works: string;
    readonly aboutMe: string;
    readonly contacts: string;
    readonly selectLanguage: string;
  };
  readonly contacts: {
    readonly title: string;
    readonly subtitle: string;
    readonly description: string;
  };
  readonly contactBox: {
    readonly title: string;
  };
  readonly footer: {
    readonly role: string;
  };
  readonly social: {
    readonly githubAria: string;
    readonly linkedinAria: string;
    readonly sidebarAria: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  'EN': {
    nav: {
      home: 'home',
      works: 'works',
      aboutMe: 'about-me',
      contacts: 'contacts',
      selectLanguage: 'Select language',
    },
    contacts: {
      title: 'contacts',
      subtitle: 'Who am i?',
      description:
        "I am always open to networking. If you have any questions, want to connect, or just want to say hi, please don't hesitate to contact me.",
    },
    contactBox: {
      title: 'Message me here',
    },
    footer: {
      role: 'Full Stack Developer',
    },
    social: {
      githubAria: "Luiz Felipe Melo's GitHub profile",
      linkedinAria: "Luiz Felipe Melo's LinkedIn profile",
      sidebarAria: 'Social profiles',
    },
  },
  'PT-BR': {
    nav: {
      home: 'início',
      works: 'projetos',
      aboutMe: 'sobre-mim',
      contacts: 'contatos',
      selectLanguage: 'Selecionar idioma',
    },
    contacts: {
      title: 'contatos',
      subtitle: 'Quem sou eu?',
      description:
        'Estou sempre aberto a networking. Se você tiver alguma dúvida, quiser se conectar ou apenas dar um oi, não hesite em entrar em contato comigo.',
    },
    contactBox: {
      title: 'Fale comigo aqui',
    },
    footer: {
      role: 'Desenvolvedor Full Stack',
    },
    social: {
      githubAria: 'Perfil do GitHub de Luiz Felipe Melo',
      linkedinAria: 'Perfil do LinkedIn de Luiz Felipe Melo',
      sidebarAria: 'Perfis sociais',
    },
  },
};

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  readonly languages: readonly Language[] = ['EN', 'PT-BR'];

  readonly currentLanguage = signal<Language>(this.getInitialLanguage());

  readonly t = computed(() => TRANSLATIONS[this.currentLanguage()]);

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('portfolio_language', language);
      } catch {
        // Ignora erros de quota ou restrição de storage
      }
    }
  }

  private getInitialLanguage(): Language {
    if (typeof localStorage !== 'undefined') {
      try {
        const saved = localStorage.getItem('portfolio_language') as Language | null;
        if (saved && (saved === 'EN' || saved === 'PT-BR')) {
          return saved;
        }
      } catch {
        // Ignora erros de acesso a localStorage
      }
    }
    return 'EN';
  }
}
