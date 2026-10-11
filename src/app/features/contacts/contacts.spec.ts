import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Contacts } from './contacts';
import { TranslationService } from '../../core/services/translation.service';

describe('Contacts', () => {
  let component: Contacts;
  let fixture: ComponentFixture<Contacts>;
  let translationService: TranslationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contacts],
      providers: [provideRouter([])],
    }).compileComponents();

    translationService = TestBed.inject(TranslationService);
    translationService.setLanguage('EN');

    fixture = TestBed.createComponent(Contacts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should translate page content when language changes between EN and PT-BR', async () => {
    fixture.detectChanges();
    let compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.contacts-page__title')?.textContent).toContain('/contacts');
    expect(compiled.querySelector('.contacts-page__subtitle')?.textContent).toContain('Who am i?');
    expect(compiled.querySelector('.contacts-page__text')?.textContent).toContain(
      'I am always open to networking'
    );
    expect(compiled.textContent).toContain('Message me here');

    translationService.setLanguage('PT-BR');
    fixture.detectChanges();
    await fixture.whenStable();

    compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.contacts-page__title')?.textContent).toContain('/contatos');
    expect(compiled.querySelector('.contacts-page__subtitle')?.textContent).toContain('Quem sou eu?');
    expect(compiled.querySelector('.contacts-page__text')?.textContent).toContain(
      'Estou sempre aberto a networking'
    );
    expect(compiled.textContent).toContain('Fale comigo aqui');
  });
});
