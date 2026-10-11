import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '../../core/layout/header/header';
import { SocialSidebar } from '../../core/layout/social-sidebar/social-sidebar';
import { Footer } from '../../core/layout/footer/footer';
import { ContactBox } from '../../shared/components/contact-box/contact-box';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Header, SocialSidebar, ContactBox, Footer],
  selector: 'app-contacts',
  styleUrl: './contacts.css',
  templateUrl: './contacts.html',
})
export class Contacts {}

export { Contacts as ContactComponent };
