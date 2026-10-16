import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'base-title',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-title.component.html',
  styleUrl: './base-title.component.scss'
})
export class BaseTitle {
  @Input() level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';
  @Input() text = '';
  @Input() variant: 'default' | 'gradient' | 'muted' = 'default';
}
