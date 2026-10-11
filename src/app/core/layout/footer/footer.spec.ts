import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the top divider line', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.footer__divider')).toBeTruthy();
  });

  it('should display exactly "Full Stack Developer" and no email address', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const role = compiled.querySelector('.footer__role');
    expect(role?.textContent?.trim()).toBe('Full Stack Developer');
    expect(compiled.querySelector('a[href^="mailto:"]')).toBeNull();
    expect(compiled.textContent).not.toContain('@');
  });
});
