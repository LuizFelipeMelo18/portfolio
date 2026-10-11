import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './header';
import { TranslationService } from '../../services/translation.service';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let translationService: TranslationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    translationService = TestBed.inject(TranslationService);
    translationService.setLanguage('EN');

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update navigation items when language changes', async () => {
    fixture.detectChanges();
    let compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('#contacts');

    translationService.setLanguage('PT-BR');
    fixture.detectChanges();
    await fixture.whenStable();

    compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('#contatos');
    expect(compiled.textContent).toContain('#início');
  });
});
