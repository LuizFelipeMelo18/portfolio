import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-contact-box',
  styleUrl: './contact-box.css',
  templateUrl: './contact-box.html',
})
export class ContactBox {
  private readonly translationService = inject(TranslationService);

  readonly title = input<string>();
  readonly email = input('luizfelipemelo.dev@gmail.com');

  protected readonly displayTitle = computed(
    () => this.title() ?? this.translationService.t().contactBox.title
  );

  protected readonly mailtoHref = computed(() => `mailto:${this.email()}`);
}

export { ContactBox as ContactBoxComponent };
