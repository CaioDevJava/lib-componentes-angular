import { EventEmitter } from '@angular/core';
import type { BaseTableColumn } from '../types.js';
import type { TableAction } from './base-table.props';
import * as i0 from "@angular/core";
type Column<T> = BaseTableColumn<T> | Extract<keyof T, string>;
export declare class BaseTable<T extends Record<string, unknown>> {
    columns: Column<T>[];
    rows: T[];
    dados: T[];
    emptyText: string;
    actions: TableAction<T>[];
    noDataValue: string;
    actionClick: EventEmitter<{
        action: string;
        row: T;
    }>;
    rowClick: EventEmitter<T>;
    key(column: Column<T>): string;
    label(column: Column<T>): string;
    get records(): T[];
    formatCell(value: unknown): string;
    onActionClick(actionId: string, row: T, event: MouseEvent): void;
    onRowClick(row: T): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseTable<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseTable<any>, "base-table", never, { "columns": { "alias": "columns"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "dados": { "alias": "dados"; "required": false; }; "emptyText": { "alias": "emptyText"; "required": false; }; "actions": { "alias": "actions"; "required": false; }; "noDataValue": { "alias": "noDataValue"; "required": false; }; }, { "actionClick": "actionClick"; "rowClick": "rowClick"; }, never, never, true, never>;
}
export {};
