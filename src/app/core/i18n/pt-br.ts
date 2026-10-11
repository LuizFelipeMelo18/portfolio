import { Translations } from './translations.model';

export const PT_BR: Translations = {
  nav: {
    home: 'início',
    works: 'projetos',
    aboutMe: 'sobre-mim',
    contacts: 'contatos',
    selectLanguage: 'Selecionar idioma',
    mainNavigation: 'Navegação principal',
  },
  // TODO: preencher com os textos finais da página "Sobre Mim"
  aboutMe: {
    title: 'sobre-mim',
    subtitle: 'Quem sou eu?',
    greeting: 'Olá, eu sou o Luiz Felipe!',
    paragraphs: [
      'Meu nome é Luiz, tenho 21 anos, atualmente trabalho com desenvolvimento de software e tenho praticamente 2 anos de experiência. Gosto de transformar minha curiosidade e conhecimento em soluções práticas, sempre buscando aprender coisas novas.',
    ],
    readMore: 'Saiba mais',
    skills: {
      title: 'habilidades',
      languages: 'Linguagens',
      frameworks: 'Frameworks',
      databases: 'Bancos de dados',
      tools: 'Ferramentas',
      other: 'Outros',
    },
    funFacts: {
      title: 'curiosidades',
      items: [],
    },
  },
  works: {
    title: 'projetos',
    subtitle: 'Lista dos meus projetos',
    sectionTitle: 'projetos',
    githubAria: 'Abrir no GitHub',
    projects: {
      portfolio: 'Meu portfólio pessoal criado em Angular',
      startingCoding:
        'Plataforma educacional com trilhas de cursos, comunidades por curso, desafios, projetos colaborativos, certificados, mentoria e gerenciamento de aprendizado.',
      moviesLab: 'Site com consumo de API para consulta de filmes.',
    },
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
  home: {
    hero: {
      subtitle: 'Construo soluções escaláveis, tirando ideias do papel e colocando em prática através do código',
      contactBtn: 'Contact me!!',
    },
    projects: {
      title: 'projetos',
      viewAll: 'Ver todos ~~>',
    },
  },
  footer: {
    role: 'Desenvolvedor Full Stack',
  },
  social: {
    githubAria: 'Perfil do GitHub de Luiz Felipe Melo',
    linkedinAria: 'Perfil do LinkedIn de Luiz Felipe Melo',
    sidebarAria: 'Perfis sociais',
  },
};
