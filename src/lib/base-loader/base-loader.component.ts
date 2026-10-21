import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { LoaderSize, LoaderMode } from './base-loader.props';

@Component({
  selector: 'base-loader',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-loader.component.html',
  styleUrl: './base-loader.component.scss'
})
export class BaseLoader {
  @Input() size: LoaderSize = 'medium';
  @Input() mode: LoaderMode = 'inline';
  @Input() message = '';
  @Input() color = '';
  @Input() ariaLabel = 'Carregando';
}
