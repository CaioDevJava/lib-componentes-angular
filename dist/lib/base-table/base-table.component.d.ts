import type { BaseTableColumn } from '../types.js';
type Column<T> = BaseTableColumn<T> | Extract<keyof T, string>;
export declare class BaseTable<T extends Record<string, unknown>> {
    columns: Column<T>[];
    rows: T[];
    dados: T[];
    emptyText: string;
    key(column: Column<T>): string;
    label(column: Column<T>): string;
    get records(): T[];
}
export {};
