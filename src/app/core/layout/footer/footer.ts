import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CONTACT_INFO } from '../../constants/contact-info';
import { TranslationService } from '../../services/translation.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  private readonly translationService = inject(TranslationService);

  protected readonly contactInfo = CONTACT_INFO;
  protected readonly role = computed(() => this.translationService.t().footer.role);
}
