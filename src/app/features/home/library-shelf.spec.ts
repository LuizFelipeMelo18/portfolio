import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { LibraryShelf } from './library-shelf';

describe('LibraryShelf', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [LibraryShelf] }).compileComponents();
  });

  it('divides all 35 books across Technical/General categories and Completed/Reading/Backlog statuses', () => {
    const fixture = TestBed.createComponent(LibraryShelf);
    fixture.componentRef.setInput('isPt', true);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const headings = Array.from(host.querySelectorAll('.shelf__heading')).map((el) => el.textContent?.trim());
    expect(headings).toEqual(['CONCLUÍDO', 'LENDO', 'BACKLOG']);
    expect(host.querySelectorAll('.book-card').length).toBe(35);
    expect(host.querySelector('.book-card__title')?.textContent?.trim()).toBe('Entendendo Algoritmos');

    const tabs = Array.from(host.querySelectorAll<HTMLButtonElement>('.tellico__tabs button'));
    tabs[1].click();
    fixture.detectChanges();
    expect(host.querySelectorAll('.book-card').length).toBe(15);

    tabs[2].click();
    fixture.detectChanges();
    expect(host.querySelectorAll('.book-card').length).toBe(20);

    // Filter status -> Lendo inside Gerais (Blade Runner)
    const statusButtons = Array.from(host.querySelectorAll<HTMLButtonElement>('.tellico-group__btn'));
    const readingBtn = statusButtons.find((button) => button.textContent?.includes('Lendo'))!;
    readingBtn.click();
    fixture.detectChanges();
    expect(host.querySelectorAll('.book-card').length).toBe(1);
    expect(host.querySelector('.book-card__title')?.textContent?.trim()).toBe('Blade Runner');
    fixture.destroy();
  });

  it('opens the 3D book review dialog when clicking resenha and closes it cleanly', () => {
    vi.useFakeTimers();
    try {
      const fixture = TestBed.createComponent(LibraryShelf);
      fixture.componentRef.setInput('isPt', true);
      fixture.detectChanges();

      const host = fixture.nativeElement as HTMLElement;
      expect(host.querySelector('.book-overlay')).toBeNull();

      (host.querySelector('.book-card__review-btn') as HTMLButtonElement).click();
      fixture.detectChanges();

      expect(host.querySelector('.book-overlay')).toBeTruthy();
      expect(host.querySelector('.book-3d__cover')).toBeTruthy();
      expect(host.querySelector('.book-page__title')?.textContent?.trim()).toBe('Entendendo Algoritmos');
      expect(host.querySelector('.book-page__empty-title')?.textContent).toContain('Resenha ainda não adicionada.');
      expect(host.querySelector<HTMLImageElement>('.book-3d__cover-front img')?.src).toContain('/books/entendendo-algoritmos.jpg');

      (host.querySelector('.book-page__close') as HTMLButtonElement).click();
      fixture.detectChanges();
      expect(host.querySelector('.book-overlay--closing')).toBeTruthy();

      vi.advanceTimersByTime(450);
      fixture.detectChanges();
      expect(host.querySelector('.book-overlay')).toBeNull();
      fixture.destroy();
    } finally {
      vi.useRealTimers();
    }
  });
});
