import { TestBed } from '@angular/core/testing';
import { PersonalHub } from './personal-hub';

describe('PersonalHub', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [PersonalHub] }).compileComponents();
  });

  it('shows all five tabs and renders the 6 favorites for each category', () => {
    const fixture = TestBed.createComponent(PersonalHub);
    fixture.componentRef.setInput('isPt', true);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const tabs = Array.from(host.querySelectorAll<HTMLButtonElement>('.personal__tab'));
    expect(tabs.map((tab) => tab.textContent?.trim())).toEqual(['Anime', 'Mangás', 'Filmes', 'Games', 'Música']);

    // Default tab: Anime
    expect(host.querySelectorAll('.personal-card').length).toBe(6);
    expect(host.querySelector('.personal__grid')?.textContent).toContain('Shingeki no Kyojin');
    expect(host.querySelector('.personal__grid')?.textContent).toContain('Solo Leveling');

    // Switch to Mangás
    tabs[1].click();
    fixture.detectChanges();
    expect(host.querySelectorAll('.personal-card').length).toBe(6);
    expect(host.querySelector('.personal__grid')?.textContent).toContain('Vagabond');
    expect(host.querySelector('.personal__grid')?.textContent).toContain('Gachiakuta');

    // Switch to Filmes
    tabs[2].click();
    fixture.detectChanges();
    expect(host.querySelectorAll('.personal-card').length).toBe(6);
    expect(host.querySelector('.personal__grid')?.textContent).toContain('Oppenheimer');
    expect(host.querySelector('.personal__grid')?.textContent).toContain('O Homem do Futuro');

    // Switch to Games
    tabs[3].click();
    fixture.detectChanges();
    expect(host.querySelectorAll('.personal-card').length).toBe(6);
    expect(host.querySelector('.personal__grid')?.textContent).toContain('Elden Ring');
    expect(host.querySelector('.personal__grid')?.textContent).toContain('Metal Gear Rising');

    // Switch to Música
    tabs[4].click();
    fixture.detectChanges();
    expect(host.querySelectorAll('.personal-card--music').length).toBe(6);
    expect(host.querySelector('.personal__grid')?.textContent).toContain('Slipknot');
    expect(host.querySelector('.personal__grid')?.textContent).toContain('Deftones');
    fixture.destroy();
  });
});
