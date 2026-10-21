import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { BaseTableColumn } from '../types.js';
import type { TableAction } from './base-table.props';

type Column<T> = BaseTableColumn<T> | Extract<keyof T, string>;

@Component({
  selector: 'base-table',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-table.component.html',
  styleUrl: './base-table.component.scss'
})
export class BaseTable<T extends Record<string, unknown>> {
  @Input() columns: Column<T>[] = [];
  @Input() rows: T[] = [];
  @Input() dados: T[] = [];
  @Input() emptyText = 'Nenhum registro encontrado';
  @Input() actions: TableAction<T>[] = [];
  @Input() noDataValue = '-';

  @Output() actionClick = new EventEmitter<{ action: string; row: T }>();
  @Output() rowClick = new EventEmitter<T>();

  key(column: Column<T>): string {
    return typeof column === 'string' ? column : column.key;
  }

  label(column: Column<T>): string {
    return typeof column === 'string' ? column : column.label;
  }

  get records(): T[] {
    return this.dados.length ? this.dados : this.rows;
  }

  formatCell(value: unknown): string {
    if (value === null || value === undefined || value === '') {
      return this.noDataValue;
    }
    return String(value);
  }

  onActionClick(actionId: string, row: T, event: MouseEvent): void {
    event.stopPropagation();
    this.actionClick.emit({ action: actionId, row });
  }

  onRowClick(row: T): void {
    this.rowClick.emit(row);
  }
}
