var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
let BaseChip = class BaseChip {
    removable = false;
    baseRemove = new EventEmitter();
};
__decorate([
    Input()
], BaseChip.prototype, "removable", void 0);
__decorate([
    Output()
], BaseChip.prototype, "baseRemove", void 0);
BaseChip = __decorate([
    Component({ selector: 'base-chip', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<span class="chip"><ng-content />@if (removable) { <button type="button" aria-label="Remover" (click)="baseRemove.emit()">×</button> }</span>`, styles: [`:host{display:inline-flex}.chip{align-items:center;background:var(--base-secondary,#e5e7eb);border-radius:999px;display:inline-flex;gap:.4rem;padding:.3rem .7rem}.chip button{background:transparent;border:0;cursor:pointer}`] })
], BaseChip);
export { BaseChip };
