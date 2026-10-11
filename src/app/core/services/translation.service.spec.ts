import { TestBed } from '@angular/core/testing';
import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  let service: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationService);
  });

  it('should be created with default language', () => {
    expect(service).toBeTruthy();
    expect(service.currentLanguage()).toBe('EN');
    expect(service.t().nav.contacts).toBe('contacts');
  });

  it('should update translations when language changes to PT-BR', () => {
    service.setLanguage('PT-BR');
    expect(service.currentLanguage()).toBe('PT-BR');
    expect(service.t().nav.contacts).toBe('contatos');
    expect(service.t().contacts.subtitle).toBe('Quem sou eu?');
    expect(service.t().footer.role).toBe('Desenvolvedor Full Stack');
  });
});
