import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'base-tooltip',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-tooltip.component.html',
  styleUrl: './base-tooltip.component.scss'
})
export class BaseTooltip {
  @Input() content = '';
  @Input() id = 'base-tooltip';
  @Input() maxLength = 120; // character limit for succinct info

  get truncatedContent(): string {
    if (!this.content) return '';
    if (this.content.length > this.maxLength) {
      return this.content.substring(0, this.maxLength).trim() + '...';
    }
    return this.content;
  }
}
