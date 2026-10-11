import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_INFO } from '../../constants/contact-info';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly contactInfo = CONTACT_INFO;
}
