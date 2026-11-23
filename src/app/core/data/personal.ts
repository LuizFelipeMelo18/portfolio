export type PersonalTabId = 'anime' | 'manga' | 'movies' | 'games' | 'music';

export interface PersonalTab {
  readonly id: PersonalTabId;
  readonly label: { readonly pt: string; readonly en: string };
  readonly path: string;
}

export interface PersonalItem {
  readonly id: string;
  readonly tab: PersonalTabId;
  readonly title: string;
  readonly subtitle: string;
  readonly cover: string;
}

export const PERSONAL_TABS: readonly PersonalTab[] = [
  { id: 'anime', label: { pt: 'Anime', en: 'Anime' }, path: 'anime' },
  { id: 'manga', label: { pt: 'Mangás', en: 'Manga' }, path: 'mangas' },
  { id: 'movies', label: { pt: 'Filmes', en: 'Movies' }, path: 'filmes' },
  { id: 'games', label: { pt: 'Games', en: 'Games' }, path: 'games' },
  { id: 'music', label: { pt: 'Música', en: 'Music' }, path: 'musica' },
];

export const PERSONAL_ITEMS: readonly PersonalItem[] = [
  // Anime
  {
    id: 'shingeki-no-kyojin',
    tab: 'anime',
    title: 'Shingeki no Kyojin',
    subtitle: 'Wit Studio / MAPPA · 2013',
    cover: '/personal/anime-shingeki.jpg',
  },
  {
    id: 'cavaleiros-do-zodiaco',
    tab: 'anime',
    title: 'Cavaleiros do Zodíaco',
    subtitle: 'Toei Animation · 1986',
    cover: '/personal/anime-cdz.jpg',
  },
  {
    id: 'jujutsu-kaisen',
    tab: 'anime',
    title: 'Jujutsu Kaisen',
    subtitle: 'MAPPA · 2020',
    cover: '/personal/anime-jujutsu.jpg',
  },
  {
    id: 'kimetsu-no-yaiba',
    tab: 'anime',
    title: 'Kimetsu no Yaiba',
    subtitle: 'ufotable · 2019',
    cover: '/personal/anime-kimetsu.jpg',
  },
  {
    id: 'trigun',
    tab: 'anime',
    title: 'Trigun',
    subtitle: 'Madhouse · 1998',
    cover: '/personal/anime-trigun.jpg',
  },
  {
    id: 'solo-leveling',
    tab: 'anime',
    title: 'Solo Leveling',
    subtitle: 'A-1 Pictures · 2024',
    cover: '/personal/anime-solo-leveling.jpg',
  },

  // Mangás
  {
    id: 'vagabond',
    tab: 'manga',
    title: 'Vagabond',
    subtitle: 'Takehiko Inoue',
    cover: '/personal/manga-vagabond.png',
  },
  {
    id: 'boa-noite-punpun',
    tab: 'manga',
    title: 'Boa Noite Punpun',
    subtitle: 'Inio Asano',
    cover: '/personal/manga-punpun.jpg',
  },
  {
    id: 'chainsaw-man',
    tab: 'manga',
    title: 'Chainsaw Man',
    subtitle: 'Tatsuki Fujimoto',
    cover: '/personal/manga-chainsaw-man.jpg',
  },
  {
    id: 'dororo',
    tab: 'manga',
    title: 'Dororo',
    subtitle: 'Osamu Tezuka',
    cover: '/personal/manga-dororo.png',
  },
  {
    id: 'gachiakuta',
    tab: 'manga',
    title: 'Gachiakuta',
    subtitle: 'Kei Urana',
    cover: '/personal/manga-gachiakuta.png',
  },
  {
    id: 'the-lost-canvas',
    tab: 'manga',
    title: 'Cavaleiros do Zodíaco: The Lost Canvas',
    subtitle: 'Shiori Teshirogi',
    cover: '/personal/manga-lost-canvas.jpg',
  },

  // Filmes
  {
    id: 'whiplash',
    tab: 'movies',
    title: 'Whiplash',
    subtitle: 'Damien Chazelle · 2014',
    cover: '/personal/movie-whiplash.jpg',
  },
  {
    id: 'o-homem-do-futuro',
    tab: 'movies',
    title: 'O Homem do Futuro',
    subtitle: 'Cláudio Torres · 2011',
    cover: '/personal/movie-homem-do-futuro.jpg',
  },
  {
    id: 'blade-runner-2049',
    tab: 'movies',
    title: 'Blade Runner 2049',
    subtitle: 'Denis Villeneuve · 2017',
    cover: '/personal/movie-blade-runner-2049.png',
  },
  {
    id: 'devoradores-de-estrelas',
    tab: 'movies',
    title: 'Devoradores de Estrelas',
    subtitle: 'Phil Lord & Christopher Miller · 2026',
    cover: '/personal/movie-devoradores.jpg',
  },
  {
    id: 'oppenheimer',
    tab: 'movies',
    title: 'Oppenheimer',
    subtitle: 'Christopher Nolan · 2023',
    cover: '/personal/movie-oppenheimer.jpg',
  },
  {
    id: 'rogue-one',
    tab: 'movies',
    title: 'Rogue One',
    subtitle: 'Gareth Edwards · 2016',
    cover: '/personal/movie-rogue-one.png',
  },

  // Games
  {
    id: 'elden-ring',
    tab: 'games',
    title: 'Elden Ring',
    subtitle: 'FromSoftware · 2022',
    cover: '/personal/game-elden-ring.jpg',
  },
  {
    id: 'god-of-war',
    tab: 'games',
    title: 'God of War',
    subtitle: 'Santa Monica Studio · 2018',
    cover: '/personal/game-god-of-war.jpg',
  },
  {
    id: 'watch-dogs',
    tab: 'games',
    title: 'Watch Dogs',
    subtitle: 'Ubisoft Montreal · 2014',
    cover: '/personal/game-watch-dogs.jpg',
  },
  {
    id: 'cyberpunk-2077',
    tab: 'games',
    title: 'Cyberpunk 2077',
    subtitle: 'CD Projekt Red · 2020',
    cover: '/personal/game-cyberpunk-2077.jpg',
  },
  {
    id: 'red-dead-2',
    tab: 'games',
    title: 'Red Dead Redemption 2',
    subtitle: 'Rockstar Games · 2018',
    cover: '/personal/game-red-dead-2.jpg',
  },
  {
    id: 'metal-gear-rising',
    tab: 'games',
    title: 'Metal Gear Rising',
    subtitle: 'PlatinumGames · 2013',
    cover: '/personal/game-metal-gear-rising.jpg',
  },

  // Música
  {
    id: 'linkin-park',
    tab: 'music',
    title: 'Linkin Park',
    subtitle: 'Nu Metal · Alternative Rock',
    cover: '/covers/meteora.jpg',
  },
  {
    id: 'joji',
    tab: 'music',
    title: 'Joji',
    subtitle: 'Lo-Fi · Alternative R&B',
    cover: '/covers/nectar.jpg',
  },
  {
    id: 'tame-impala',
    tab: 'music',
    title: 'Tame Impala',
    subtitle: 'Psychedelic Pop · Indie',
    cover: '/covers/currents.jpg',
  },
  {
    id: 'system-of-a-down',
    tab: 'music',
    title: 'System of a Down',
    subtitle: 'Alternative Metal',
    cover: '/covers/hypnotize.jpg',
  },
  {
    id: 'slipknot',
    tab: 'music',
    title: 'Slipknot',
    subtitle: 'Nu Metal · Heavy Metal',
    cover: '/personal/music-slipknot.jpg',
  },
  {
    id: 'deftones',
    tab: 'music',
    title: 'Deftones',
    subtitle: 'Alternative Metal · Shoegaze',
    cover: '/covers/white-pony.jpg',
  },
];
