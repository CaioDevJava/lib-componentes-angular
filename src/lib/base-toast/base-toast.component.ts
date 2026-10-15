import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import type { ToastVariant } from '../types.js';

@Component({
  selector: 'base-toast',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-toast.component.html',
  styleUrl: './base-toast.component.scss'
})
export class BaseToast implements OnInit, OnDestroy {
  @Input() variant: ToastVariant = 'info';
  @Input() message = 'Toast de exemplo!';
  @Input() duration = 0; // in ms
  @Input() dismissible = true;
  @Output() closed = new EventEmitter<void>();

  private timer: any;

  ngOnInit() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        this.closed.emit();
      }, this.duration);
    }
  }

  ngOnDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
