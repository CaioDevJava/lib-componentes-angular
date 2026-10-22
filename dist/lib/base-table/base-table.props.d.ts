import type { BaseTableColumn } from '../types.js';
export interface BaseTableProps<T extends Record<string, unknown>> {
    columns: BaseTableColumn<T>[];
    rows?: T[];
    dados?: T[];
    emptyText: string;
}
