import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-about-me',
  styleUrl: './about-me.css',
  templateUrl: './about-me.html',
})
export class AboutMe {
  protected readonly t = inject(TranslationService).t;
}
