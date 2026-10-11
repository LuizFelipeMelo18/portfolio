import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-contact-box',
  styleUrl: './contact-box.css',
  templateUrl: './contact-box.html',
})
export class ContactBox {
  readonly title = input('Message me here');
  readonly email = input('luizfelipemelo.dev@gmail.com');

  protected readonly mailtoHref = computed(() => `mailto:${this.email()}`);
}
