import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'base-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-card.component.html',
  styleUrl: './base-card.component.scss'
})
export class BaseCard {
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() clickable = false;
  @Output() cardClick = new EventEmitter<MouseEvent>();
}
