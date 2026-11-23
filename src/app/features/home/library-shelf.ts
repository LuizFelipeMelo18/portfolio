import { ChangeDetectionStrategy, Component, OnDestroy, computed, input, signal } from '@angular/core';
import { BookCategory, BookStatus, LIBRARY_BOOKS, LibraryBook, LocalizedText } from '../../core/data/books';

type FilterCategory = 'all' | BookCategory;
type FilterStatus = 'all' | BookStatus;

interface ShelfGroup {
  readonly status: BookStatus;
  readonly heading: string;
  readonly books: readonly LibraryBook[];
}

const STATUS_ORDER: readonly BookStatus[] = ['completed', 'reading', 'backlog'];

@Component({
  selector: 'app-library-shelf',
  templateUrl: './library-shelf.html',
  styleUrl: './library-shelf.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'onEscape()',
  },
})
export class LibraryShelf implements OnDestroy {
  readonly isPt = input(true);

  protected readonly books = LIBRARY_BOOKS;
  protected readonly stars = [1, 2, 3, 4, 5] as const;
  protected readonly selectedCategory = signal<FilterCategory>('all');
  protected readonly selectedStatus = signal<FilterStatus>('all');
  protected readonly searchQuery = signal('');
  protected readonly activeBook = signal<LibraryBook | null>(null);
  protected readonly closing = signal(false);

  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  protected readonly technicalCount = LIBRARY_BOOKS.filter((book) => book.category === 'technical').length;
  protected readonly generalCount = LIBRARY_BOOKS.filter((book) => book.category === 'general').length;

  protected readonly categoryBooks = computed<readonly LibraryBook[]>(() => {
    const category = this.selectedCategory();
    return category === 'all' ? this.books : this.books.filter((book) => book.category === category);
  });

  protected readonly completedCount = computed(() =>
    this.categoryBooks().filter((book) => book.status === 'completed').length
  );
  protected readonly readingCount = computed(() =>
    this.categoryBooks().filter((book) => book.status === 'reading').length
  );
  protected readonly backlogCount = computed(() =>
    this.categoryBooks().filter((book) => book.status === 'backlog').length
  );

  protected readonly filteredBooks = computed<readonly LibraryBook[]>(() => {
    const status = this.selectedStatus();
    const query = this.searchQuery().trim().toLocaleLowerCase();
    return this.categoryBooks().filter((book) => {
      if (status !== 'all' && book.status !== status) return false;
      if (!query) return true;
      const haystack = `${book.title.pt} ${book.title.en} ${book.author} ${book.publisher ?? ''}`.toLocaleLowerCase();
      return haystack.includes(query);
    });
  });

  protected readonly shelves = computed<readonly ShelfGroup[]>(() => {
    const visible = this.filteredBooks();
    return STATUS_ORDER.map((status) => ({
      status,
      heading: this.statusHeading(status),
      books: visible.filter((book) => book.status === status),
    })).filter((group) => group.books.length > 0);
  });

  ngOnDestroy(): void {
    this.clearCloseTimer();
  }

  protected text(value: LocalizedText): string {
    return this.isPt() ? value.pt : value.en;
  }

  protected categoryLabel(category: BookCategory): string {
    if (category === 'technical') return this.isPt() ? 'Técnico' : 'Technical';
    return this.isPt() ? 'Geral' : 'General';
  }

  protected statusLabel(status: BookStatus): string {
    if (status === 'completed') return this.isPt() ? 'Concluído' : 'Completed';
    if (status === 'reading') return this.isPt() ? 'Lendo' : 'Reading';
    return 'Backlog';
  }

  protected selectCategory(category: FilterCategory): void {
    this.selectedCategory.set(category);
  }

  protected selectStatus(status: FilterStatus): void {
    this.selectedStatus.set(status);
  }

  protected updateSearch(event: Event): void {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  protected openReview(book: LibraryBook): void {
    this.clearCloseTimer();
    this.closing.set(false);
    this.activeBook.set(book);
  }

  protected closeReview(): void {
    if (!this.activeBook() || this.closing()) return;
    this.closing.set(true);
    this.clearCloseTimer();
    this.closeTimer = setTimeout(() => {
      this.activeBook.set(null);
      this.closing.set(false);
      this.closeTimer = null;
    }, 420);
  }

  protected onEscape(): void {
    if (this.activeBook()) this.closeReview();
  }

  private statusHeading(status: BookStatus): string {
    if (status === 'completed') return this.isPt() ? 'CONCLUÍDO' : 'COMPLETED';
    if (status === 'reading') return this.isPt() ? 'LENDO' : 'READING';
    return 'BACKLOG';
  }

  private clearCloseTimer(): void {
    if (this.closeTimer !== null) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }
}
