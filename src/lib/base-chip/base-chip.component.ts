import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'base-chip',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-chip.component.html',
  styleUrl: './base-chip.component.scss'
})
export class BaseChip {
  @Input() label = '';
  @Input() removable = false;
  @Input() removeLabel = 'Remover';
  @Input() backgroundColor = '';
  @Input() textColor = '';
  @Output() baseRemove = new EventEmitter<void>();
  @Output() removed = new EventEmitter<void>();

  onRemove(event: MouseEvent) {
    event.stopPropagation();
    this.baseRemove.emit();
    this.removed.emit();
  }
}
