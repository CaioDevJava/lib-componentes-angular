var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
let BaseTable = class BaseTable {
    columns = [];
    rows = [];
    emptyText = 'Nenhum registro encontrado';
};
__decorate([
    Input()
], BaseTable.prototype, "columns", void 0);
__decorate([
    Input()
], BaseTable.prototype, "rows", void 0);
__decorate([
    Input()
], BaseTable.prototype, "emptyText", void 0);
BaseTable = __decorate([
    Component({ selector: 'base-table', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<table><thead><tr>@for (column of columns; track column.key) { <th>{{column.label}}</th> }</tr></thead><tbody>@for (row of rows; track $index) { <tr>@for (column of columns; track column.key) { <td>{{row[column.key]}}</td> }</tr> } @if (!rows.length) { <tr><td [attr.colspan]="columns.length">{{emptyText}}</td></tr> }</tbody></table>`, styles: [`:host{display:block;overflow:auto}table{border-collapse:collapse;width:100%}th,td{border-bottom:1px solid var(--base-border,#d1d5db);padding:.65rem;text-align:left}`] })
], BaseTable);
export { BaseTable };
