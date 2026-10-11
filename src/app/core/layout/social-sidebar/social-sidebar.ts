import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_INFO } from '../../constants/contact-info';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-social-sidebar',
  styleUrl: './social-sidebar.css',
  templateUrl: './social-sidebar.html',
})
export class SocialSidebar {
  protected readonly contactInfo = CONTACT_INFO;
}
