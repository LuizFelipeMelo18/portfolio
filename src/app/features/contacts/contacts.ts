import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SocialSidebar } from '../../core/layout/social-sidebar/social-sidebar';
import { ContactBox } from '../../shared/components/contact-box/contact-box';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SocialSidebar, ContactBox],
  selector: 'app-contacts',
  styleUrl: './contacts.css',
  templateUrl: './contacts.html',
})
export class Contacts {
  private readonly translationService = inject(TranslationService);

  protected readonly t = this.translationService.t;
}

export { Contacts as ContactComponent };
