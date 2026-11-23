import { TestBed } from '@angular/core/testing';
import { ExperienceLog } from './experience-log';

describe('ExperienceLog', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ExperienceLog] }).compileComponents();
  });

  it('renders separate Experience and Education folders and updates the right log panel on click', () => {
    const fixture = TestBed.createComponent(ExperienceLog);
    fixture.componentRef.setInput('isPt', true);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const folders = Array.from(host.querySelectorAll<HTMLButtonElement>('.tui-folder-toggle'));
    expect(folders.map((button) => button.textContent?.trim())).toEqual(['▸experiencia/', '▸formacao/']);

    const items = Array.from(host.querySelectorAll<HTMLButtonElement>('.tui-item'));
    expect(items.length).toBe(8);

    // Default selection: CTI Consultores Associados
    expect(host.querySelector('.log-entry__meta')?.textContent).toContain('CTI Consultores Associados');
    expect(host.querySelector('.log-entry__points')?.textContent).toContain('IBM Planning Analytics');

    // Click DataTrusty Tecnologia
    const dataTrustyButton = items.find((button) => button.textContent?.includes('DataTrusty Tecnologia'))!;
    dataTrustyButton.click();
    fixture.detectChanges();
    expect(host.querySelector('.log-entry__paragraph')).toBeNull();
    expect(host.querySelector('.log-entry__points')?.textContent).toContain('Gestão de Incidentes de Qualidade');
    expect(host.querySelector('.log-entry__points')?.textContent).toContain('VPN/Cato Client');

    // Click Dell Technologies
    const dellButton = items.find((button) => button.textContent?.includes('Dell Technologies'))!;
    dellButton.click();
    fixture.detectChanges();
    expect(host.querySelector('.log-entry__meta')?.textContent).toContain('Analista de Suporte Técnico N1');
    expect(host.querySelector('.log-entry__points')?.textContent).toContain('Dell');
    expect(host.querySelector('.tui-cmd')?.textContent).toContain('experiencia/dell-technologies.log');

    // Click Limpay
    const limpayButton = items.find((button) => button.textContent?.includes('Limpay'))!;
    limpayButton.click();
    fixture.detectChanges();
    expect(host.querySelectorAll('.log-entry__points li').length).toBe(2);
    expect(host.querySelector('.log-entry__points')?.textContent).toContain('Spring Boot');

    // Click Uninter (Education)
    const uninterButton = items.find((button) => button.textContent?.includes('Uninter'))!;
    uninterButton.click();
    fixture.detectChanges();
    expect(host.querySelector('.log-entry__meta')?.textContent).toContain('Tecnólogo em Análise e Desenvolvimento de Sistemas');
    expect(host.querySelector('.log-entry__meta')?.textContent).toContain('Ago/2024 - Dez/2026');
    expect(host.querySelector('.tui-cmd')?.textContent).toContain('formacao/uninter-ads.log');
    fixture.destroy();
  });

  it('collapses folders and switches descriptions to English when isPt is false', () => {
    const fixture = TestBed.createComponent(ExperienceLog);
    fixture.componentRef.setInput('isPt', false);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('.log-entry__points')?.textContent).toContain('Requirements Analysis & Business Alignment');

    const [experienceFolder] = Array.from(host.querySelectorAll<HTMLButtonElement>('.tui-folder-toggle'));
    experienceFolder.click();
    fixture.detectChanges();
    expect(host.querySelectorAll('.tui-item').length).toBe(3);
    fixture.destroy();
  });
});
