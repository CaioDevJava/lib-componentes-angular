import type { BaseTableColumn } from './types.js';
export declare class BaseTable<T extends Record<string, unknown> = Record<string, unknown>> {
    columns: BaseTableColumn<T>[];
    rows: T[];
    emptyText: string;
}
