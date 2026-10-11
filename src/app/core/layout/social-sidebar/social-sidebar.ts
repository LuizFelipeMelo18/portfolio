import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CONTACT_INFO } from '../../constants/contact-info';
import { TranslationService } from '../../services/translation.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-social-sidebar',
  styleUrl: './social-sidebar.css',
  templateUrl: './social-sidebar.html',
})
export class SocialSidebar {
  private readonly translationService = inject(TranslationService);

  protected readonly contactInfo = CONTACT_INFO;
  protected readonly social = computed(() => this.translationService.t().social);
}
