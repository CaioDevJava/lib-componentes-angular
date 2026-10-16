import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'base-grid',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-grid.component.html',
  styleUrl: './base-grid.component.scss'
})
export class BaseGrid {
  @Input() columns = 3;
  @Input() gap = '1.5rem';
}
