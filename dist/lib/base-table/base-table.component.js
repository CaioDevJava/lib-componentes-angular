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
    dados = [];
    emptyText = 'Nenhum registro encontrado';
    key(column) { return typeof column === 'string' ? column : column.key; }
    label(column) { return typeof column === 'string' ? column : column.label; }
    get records() { return this.dados.length ? this.dados : this.rows; }
};
__decorate([
    Input()
], BaseTable.prototype, "columns", void 0);
__decorate([
    Input()
], BaseTable.prototype, "rows", void 0);
__decorate([
    Input()
], BaseTable.prototype, "dados", void 0);
__decorate([
    Input()
], BaseTable.prototype, "emptyText", void 0);
BaseTable = __decorate([
    Component({ selector: 'base-table', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, templateUrl: './base-table.component.html', styleUrl: './base-table.component.scss' })
], BaseTable);
export { BaseTable };
