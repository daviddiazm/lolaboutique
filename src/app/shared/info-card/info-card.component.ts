import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
