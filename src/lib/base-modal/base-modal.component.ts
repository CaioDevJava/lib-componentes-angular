import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, HostListener } from '@angular/core';

@Component({
  selector: 'base-modal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-modal.component.html',
  styleUrl: './base-modal.component.scss'
})
export class BaseModal {
  @Input() open = false;
  @Input() title = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() description = '';
  @Input() primaryButton = '';
  @Input() secondaryButton = '';

  @Output() baseClose = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();
  @Output() eventoPrimaryButton = new EventEmitter<void>();
  @Output() eventoSecundaryButton = new EventEmitter<void>();

  close() {
    this.baseClose.emit();
    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.open) {
      this.close();
    }
  }
}
