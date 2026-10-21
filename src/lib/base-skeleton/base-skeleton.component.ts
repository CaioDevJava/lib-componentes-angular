import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { SkeletonVariant, SkeletonAnimation } from './base-skeleton.props';

@Component({
  selector: 'base-skeleton',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-skeleton.component.html',
  styleUrl: './base-skeleton.component.scss'
})
export class BaseSkeleton {
  @Input() variant: SkeletonVariant = 'text';
  @Input() width = '';
  @Input() height = '';
  @Input() borderRadius = '';
  @Input() animation: SkeletonAnimation = 'shimmer';
  @Input() ariaLabel = 'Carregando conteúdo...';
}
