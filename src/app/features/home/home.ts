import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONTACT_INFO } from '../../core/constants/contact-info';
import { portfolioProjects } from '../../core/data/projects';
import { TranslationService } from '../../core/services/translation.service';
import { MediaPlayer } from './media-player';

type AppId = 'about' | 'projects' | 'stacks' | 'experience' | 'library' | 'personal' | 'customize' | 'media' | 'contact';

interface DesktopApp {
  readonly id: AppId;
  readonly pt: string;
  readonly en: string;
  readonly hint: string;
}

interface DesktopWindow {
  readonly id: AppId;
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly z: number;
  readonly minimized: boolean;
  readonly maximized: boolean;
}

type ResizeEdge = 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';

interface Wallpaper {
  readonly id: string;
  readonly src: string;
  readonly pt: string;
  readonly en: string;
}

interface EditorLine {
  readonly parts: readonly { readonly text: string; readonly tone?: 'keyword' | 'heading' | 'comment' }[];
}

const WALLPAPER_STORAGE_KEY = 'portfolio-wallpaper';

@Component({
  selector: 'app-home',
  imports: [DatePipe, MediaPlayer],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:pointermove)': 'onPointerMove($event)',
    '(document:pointerup)': 'endDrag()',
    '(document:pointercancel)': 'endDrag()',
    '(document:pointerdown)': 'onDocumentPointerDown($event)',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Home implements OnInit, OnDestroy {
  private readonly translation = inject(TranslationService);
  private readonly route = inject(ActivatedRoute);
  private nextZ = 10;
  private drag: { id: AppId; startX: number; startY: number; x: number; y: number } | null = null;
  private resize: { id: AppId; edge: ResizeEdge; startX: number; startY: number; x: number; y: number; width: number; height: number } | null = null;
  private readonly clock = setInterval(() => this.now.set(new Date()), 30_000);

  protected readonly now = signal(new Date());
  protected readonly language = this.translation.currentLanguage;
  protected readonly isPt = computed(() => this.language() === 'PT-BR');
  protected readonly t = this.translation.t;
  protected readonly contact = CONTACT_INFO;
  protected readonly menuOpen = signal(false);
  protected readonly contextMenu = signal<{ x: number; y: number } | null>(null);
  protected readonly menuQuery = signal('');
  protected readonly windows = signal<readonly DesktopWindow[]>([]);
  protected readonly activeId = signal<AppId | null>(null);
  protected readonly projects = computed(() => portfolioProjects(this.t().works.projects));
  protected readonly aboutLines = computed<readonly EditorLine[]>(() => {
    const pt = this.isPt();
    const line = (...parts: EditorLine['parts']): EditorLine => ({ parts });
    const textLines = pt
      ? [
          'Desenvolvo sistemas corporativos de ponta a ponta, com foco em',
          'Java, Kotlin e Spring Boot. Participo desde a concepção e modelagem de',
          'dados até os testes automatizados, pipelines de CI/CD e deploy em nuvem.',
          '',
          'No dia a dia, trabalho com bancos de dados, mensageria assíncrona e',
          'autenticação segura. Contribuo para decisões técnicas e de arquitetura',
          'para criar soluções escaláveis, confiáveis e fáceis de manter.',
          '',
          'Também desenvolvo interfaces com Angular, React e TypeScript.',
          'Valorizo código limpo, testes, colaboração e aprendizado contínuo.',
        ]
      : [
          'I build enterprise systems end to end, focusing on Java, Kotlin and',
          'Spring Boot. I work from the initial concept and data modeling',
          'through automated tests, CI/CD pipelines and cloud deployment.',
          '',
          'My day-to-day work includes databases, asynchronous messaging and',
          'secure authentication. I contribute to technical and architectural',
          'decisions to keep systems scalable, reliable and maintainable.',
          '',
          'I also build interfaces with Angular, React and TypeScript.',
          'I value clean code, testing, collaboration and continuous learning.',
        ];
    return [
      line({ text: '# ', tone: 'keyword' }, { text: 'Luiz Felipe Melo', tone: 'heading' }),
      line({ text: pt ? 'Desenvolvedor Full Stack' : 'Full Stack Developer', tone: 'comment' }),
      line(),
      ...textLines.map((text) => (text ? line({ text }) : line())),
    ];
  });

  protected readonly wallpapers: readonly Wallpaper[] = [
    { id: 'winter', src: '/desktop-wallpaper.png', pt: 'Inverno', en: 'Winter' },
    { id: 'ocean', src: '/wallpapers/ocean.png', pt: 'Oceano', en: 'Ocean' },
    { id: 'midnight', src: '/wallpapers/midnight.png', pt: 'Meia-noite', en: 'Midnight' },
    { id: 'studio', src: '/wallpapers/studio.png', pt: 'Ateliê', en: 'Studio' },
    { id: 'horizon', src: '/wallpapers/horizon.png', pt: 'Horizonte', en: 'Horizon' },
    { id: 'orange', src: '/wallpapers/orange.png', pt: 'Laranja', en: 'Orange' },
    { id: 'jazz', src: '/wallpapers/jazz.png', pt: 'Jazz', en: 'Jazz' },
    { id: 'dawn', src: '/wallpapers/dawn.png', pt: 'Aurora', en: 'Dawn' },
  ];
  protected readonly wallpaperId = signal(this.readWallpaperId());
  protected readonly selectedWallpaper = computed(() => this.wallpapers.find((wallpaper) => wallpaper.id === this.wallpaperId())!);

  protected readonly apps: readonly DesktopApp[] = [
    { id: 'about', pt: 'Sobre', en: 'About', hint: 'about.md' },
    { id: 'projects', pt: 'Projetos', en: 'Projects', hint: '~/dev' },
    { id: 'stacks', pt: 'Stacks', en: 'Stacks', hint: 'stack.json' },
    { id: 'experience', pt: 'Experiência e formação', en: 'Experience & education', hint: 'history.log' },
    { id: 'library', pt: 'Biblioteca', en: 'Library', hint: 'library' },
    { id: 'personal', pt: 'Personal', en: 'Personal', hint: 'personal' },
    { id: 'customize', pt: 'Personalizar', en: 'Customize', hint: 'settings' },
    { id: 'media', pt: 'Media Player', en: 'Media Player', hint: 'media' },
    { id: 'contact', pt: 'Contato', en: 'Contact', hint: 'network' },
  ];

  protected readonly filteredApps = computed(() => {
    const query = this.menuQuery().trim().toLocaleLowerCase();
    return this.apps.filter((app) => this.label(app).toLocaleLowerCase().includes(query));
  });

  ngOnInit(): void {
    const requested = this.route.snapshot.data['openApp'];
    if (this.apps.some((app) => app.id === requested)) this.openApp(requested as AppId);
  }

  ngOnDestroy(): void {
    clearInterval(this.clock);
  }

  protected label(app: DesktopApp): string {
    return this.isPt() ? app.pt : app.en;
  }

  protected appFor(id: AppId): DesktopApp {
    return this.apps.find((app) => app.id === id)!;
  }

  protected openApp(id: AppId): void {
    const existing = this.windows().find((item) => item.id === id);
    const z = ++this.nextZ;
    if (existing) {
      this.windows.update((items) => items.map((item) => item.id === id ? { ...item, minimized: false, z } : item));
    } else {
      const offset = this.windows().length * 28;
      const width = Math.min(id === 'media' ? 860 : id === 'about' ? 800 : 660, window.innerWidth - 40);
      const preferredHeight = id === 'media' ? 450 : id === 'customize' ? 600 : id === 'about' ? 500 : id === 'contact' ? 370 : 440;
      const height = Math.min(preferredHeight, window.innerHeight - 70);
      const x = Math.max(18, Math.min(350 + offset, window.innerWidth - width - 20));
      const y = Math.max(8, Math.min(70 + offset, window.innerHeight - height - 52));
      this.windows.update((items) => [...items, { id, x, y, width, height, z, minimized: false, maximized: false }]);
    }
    this.activeId.set(id);
    this.closeMenu();
  }

  protected focusWindow(id: AppId): void {
    if (this.activeId() === id && this.windows().some((item) => item.id === id && !item.minimized)) return;
    this.windows.update((items) => items.map((item) => item.id === id ? { ...item, minimized: false, z: ++this.nextZ } : item));
    this.activeId.set(id);
  }

  protected minimizeWindow(id: AppId): void {
    this.windows.update((items) => items.map((item) => item.id === id ? { ...item, minimized: true } : item));
    this.updateActive();
  }

  protected closeWindow(id: AppId): void {
    this.windows.update((items) => items.filter((item) => item.id !== id));
    this.updateActive();
  }

  protected toggleMaximize(id: AppId): void {
    this.windows.update((items) => items.map((item) => item.id === id ? { ...item, maximized: !item.maximized } : item));
    this.focusWindow(id);
  }

  protected taskClick(id: AppId): void {
    this.focusWindow(id);
  }

  protected toggleMenu(): void {
    this.contextMenu.set(null);
    this.menuOpen.update((open) => !open);
    this.menuQuery.set('');
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
    this.menuQuery.set('');
    this.contextMenu.set(null);
  }

  protected openContextMenu(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.closest('.app-window, .taskbar, .app-menu, a')) return;
    event.preventDefault();
    this.menuOpen.set(false);
    this.contextMenu.set({
      x: Math.min(event.clientX, window.innerWidth - 228),
      y: Math.min(event.clientY, window.innerHeight - 190),
    });
  }

  protected onDocumentPointerDown(event: PointerEvent): void {
    if (this.contextMenu() && !(event.target as HTMLElement).closest('.desktop-context-menu')) this.contextMenu.set(null);
  }

  protected showDesktop(): void {
    this.windows.update((items) => items.map((item) => ({ ...item, minimized: true })));
    this.updateActive();
    this.closeMenu();
  }

  protected updateQuery(event: Event): void {
    this.menuQuery.set((event.target as HTMLInputElement).value);
  }

  protected selectLanguage(language: 'PT-BR' | 'EN'): void {
    this.translation.setLanguage(language);
  }

  protected wallpaperLabel(wallpaper: Wallpaper): string {
    return this.isPt() ? wallpaper.pt : wallpaper.en;
  }

  protected selectWallpaper(id: string): void {
    if (!this.wallpapers.some((wallpaper) => wallpaper.id === id)) return;
    this.wallpaperId.set(id);
    try {
      localStorage.setItem(WALLPAPER_STORAGE_KEY, id);
    } catch {
      // The wallpaper still changes for this visit when storage is unavailable.
    }
  }

  protected startDrag(event: PointerEvent, desktopWindow: DesktopWindow): void {
    if (desktopWindow.maximized || event.button !== 0) return;
    this.focusWindow(desktopWindow.id);
    this.drag = { id: desktopWindow.id, startX: event.clientX, startY: event.clientY, x: desktopWindow.x, y: desktopWindow.y };
    event.preventDefault();
  }

  protected startResize(event: PointerEvent, desktopWindow: DesktopWindow, edge: ResizeEdge): void {
    if (desktopWindow.maximized || event.button !== 0 || window.innerWidth <= 600) return;
    this.focusWindow(desktopWindow.id);
    this.resize = { id: desktopWindow.id, edge, startX: event.clientX, startY: event.clientY, x: desktopWindow.x, y: desktopWindow.y, width: desktopWindow.width, height: desktopWindow.height };
    event.preventDefault();
    event.stopPropagation();
  }

  protected onPointerMove(event: PointerEvent): void {
    if (this.resize) {
      const origin = this.resize;
      const dx = event.clientX - origin.startX;
      const dy = event.clientY - origin.startY;
      let { x, y, width, height } = origin;
      if (origin.edge.includes('e')) width = Math.max(340, Math.min(origin.width + dx, window.innerWidth - origin.x - 8));
      if (origin.edge.includes('w')) {
        x = Math.max(8, Math.min(origin.x + dx, origin.x + origin.width - 340));
        width = origin.width + origin.x - x;
      }
      if (origin.edge.includes('s')) height = Math.max(260, Math.min(origin.height + dy, window.innerHeight - origin.y - 52));
      if (origin.edge.includes('n')) {
        y = Math.max(8, Math.min(origin.y + dy, origin.y + origin.height - 260));
        height = origin.height + origin.y - y;
      }
      this.windows.update((items) => items.map((item) => item.id === origin.id ? { ...item, x, y, width, height } : item));
      return;
    }
    if (!this.drag) return;
    const current = this.windows().find((item) => item.id === this.drag!.id)!;
    const x = Math.max(8, Math.min(this.drag.x + event.clientX - this.drag.startX, window.innerWidth - current.width - 8));
    const y = Math.max(8, Math.min(this.drag.y + event.clientY - this.drag.startY, window.innerHeight - current.height - 52));
    this.windows.update((items) => items.map((item) => item.id === this.drag!.id ? { ...item, x, y } : item));
  }

  protected endDrag(): void {
    this.drag = null;
    this.resize = null;
  }

  private updateActive(): void {
    const top = this.windows().filter((item) => !item.minimized).reduce<DesktopWindow | null>((current, item) => !current || item.z > current.z ? item : current, null);
    this.activeId.set(top?.id ?? null);
  }

  private readWallpaperId(): string {
    try {
      const saved = localStorage.getItem(WALLPAPER_STORAGE_KEY);
      if (this.wallpapers.some((wallpaper) => wallpaper.id === saved)) return saved!;
    } catch {
      // Use the default wallpaper when storage is unavailable.
    }
    return this.wallpapers[0].id;
  }
}

export { Home as HomeComponent };
