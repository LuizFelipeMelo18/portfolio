import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { PERSONAL_ITEMS, PERSONAL_TABS, PersonalItem, PersonalTab, PersonalTabId } from '../../core/data/personal';

@Component({
  selector: 'app-personal-hub',
  templateUrl: './personal-hub.html',
  styleUrl: './personal-hub.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalHub {
  readonly isPt = input(true);

  protected readonly tabs = PERSONAL_TABS;
  protected readonly totalItems = PERSONAL_ITEMS.length;
  protected readonly activeTab = signal<PersonalTabId>('anime');

  protected readonly currentTab = computed<PersonalTab>(
    () => this.tabs.find((tab) => tab.id === this.activeTab()) ?? this.tabs[0]
  );

  protected readonly visibleItems = computed<readonly PersonalItem[]>(() =>
    PERSONAL_ITEMS.filter((item) => item.tab === this.activeTab())
  );

  protected tabLabel(tab: PersonalTab): string {
    return this.isPt() ? tab.label.pt : tab.label.en;
  }

  protected selectTab(id: PersonalTabId): void {
    this.activeTab.set(id);
  }
}
