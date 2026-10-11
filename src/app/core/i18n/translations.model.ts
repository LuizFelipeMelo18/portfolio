export type Language = 'EN' | 'PT-BR';

export const SUPPORTED_LANGUAGES: readonly Language[] = ['EN', 'PT-BR'];

/** Valor do atributo `lang` do <html> para cada idioma. */
export const HTML_LANG: Record<Language, string> = {
  'EN': 'en',
  'PT-BR': 'pt-BR',
};

export interface Translations {
  readonly nav: {
    readonly home: string;
    readonly works: string;
    readonly aboutMe: string;
    readonly contacts: string;
    readonly selectLanguage: string;
    readonly mainNavigation: string;
  };
  readonly aboutMe: {
    readonly title: string;
    readonly subtitle: string;
    readonly greeting: string;
    readonly paragraphs: readonly string[];
    readonly readMore: string;
    readonly skills: {
      readonly title: string;
      readonly languages: string;
      readonly frameworks: string;
      readonly databases: string;
      readonly tools: string;
      readonly other: string;
    };
    readonly funFacts: {
      readonly title: string;
      readonly items: readonly string[];
    };
  };
  readonly works: {
    readonly title: string;
    readonly subtitle: string;
    readonly sectionTitle: string;
    readonly githubAria: string;
    readonly projects: {
      readonly portfolio: string;
      readonly startingCoding: string;
      readonly moviesLab: string;
    };
  };
  readonly contacts: {
    readonly title: string;
    readonly subtitle: string;
    readonly description: string;
  };
  readonly contactBox: {
    readonly title: string;
  };
  readonly home: {
    readonly hero: {
      readonly subtitle: string;
      readonly contactBtn: string;
    };
    readonly projects: {
      readonly title: string;
      readonly viewAll: string;
    };
    readonly skills: {
      readonly title: string;
    };
    readonly aboutMe: {
      readonly title: string;
      readonly greeting: string;
      readonly paragraphs: readonly string[];
      readonly readMore: string;
    };
    readonly contacts: {
      readonly title: string;
      readonly text: string;
    };
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
