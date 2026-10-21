import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { HeaderPosition, HeaderNavItem } from './base-header.props';

@Component({
  selector: 'base-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-header.component.html',
  styleUrl: './base-header.component.scss'
})
export class BaseHeader {
  @Input() position: HeaderPosition = 'sticky';
  @Input() brandTitle = 'Meu Sistema';
  @Input() brandLogo = '';
  @Input() navItems: HeaderNavItem[] = [];

  @Output() navSelect = new EventEmitter<HeaderNavItem>();
  @Output() brandClick = new EventEmitter<void>();

  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  onNavClick(item: HeaderNavItem): void {
    this.navSelect.emit(item);
    this.mobileMenuOpen = false;
  }

  onBrandClick(): void {
    this.brandClick.emit();
  }
}
