import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'base-input',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-input.component.html',
  styleUrl: './base-input.component.scss'
})
export class BaseInput {
  @Input() label = '';
  @Input() id = 'base-input';
  @Input() value = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() disabled = false;
  @Input() required = false;
  @Input() state: 'default' | 'success' | 'error' | 'warning' = 'default';
  @Input() helperText = '';
  @Output() baseInput = new EventEmitter<string>();
}
