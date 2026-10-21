import type { BaseTableColumn } from '../types.js';

export interface TableAction<T> {
  id: string;
  label: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
}

export interface BaseTableProps<T extends Record<string, unknown>> {
  columns: BaseTableColumn<T>[];
  rows?: T[];
  dados?: T[];
  emptyText?: string;
  actions?: TableAction<T>[];
  noDataValue?: string;
}
