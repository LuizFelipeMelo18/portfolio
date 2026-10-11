import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsBox } from './skills-box';

describe('SkillsBox', () => {
  let fixture: ComponentFixture<SkillsBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SkillsBox] }).compileComponents();
    fixture = TestBed.createComponent(SkillsBox);
    fixture.componentRef.setInput('title', 'Databases');
    fixture.componentRef.setInput('skills', ['PostgreSQL', 'MySQL']);
    fixture.detectChanges();
  });

  it('should render title and skills', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.skills-box__title')?.textContent).toContain('Databases');
    const items = el.querySelectorAll('.skills-box__item');
    expect(items.length).toBe(2);
    expect(items[0].textContent).toContain('PostgreSQL');
  });
});
