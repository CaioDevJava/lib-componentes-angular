var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
let BaseButton = class BaseButton {
    variant = 'primary';
    disabled = false;
    loading = false;
    type = 'button';
    baseClick = new EventEmitter();
};
__decorate([
    Input()
], BaseButton.prototype, "variant", void 0);
__decorate([
    Input()
], BaseButton.prototype, "disabled", void 0);
__decorate([
    Input()
], BaseButton.prototype, "loading", void 0);
__decorate([
    Input()
], BaseButton.prototype, "type", void 0);
__decorate([
    Output()
], BaseButton.prototype, "baseClick", void 0);
BaseButton = __decorate([
    Component({ selector: 'base-button', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<button [class]="variant" [disabled]="disabled || loading" [attr.type]="type" (click)="baseClick.emit($event)">@if (loading) { Carregando… } @else { <ng-content /> }</button>`, styles: [`:host{display:inline-block}button{border:0;border-radius:var(--base-radius,.5rem);cursor:pointer;font:inherit;padding:.65rem 1rem}.primary{background:var(--base-primary,#2563eb);color:white}.secondary{background:var(--base-secondary,#e5e7eb);color:#111827}.ghost{background:transparent;color:var(--base-primary,#2563eb)}.danger{background:var(--base-danger,#dc2626);color:white}button:disabled{cursor:not-allowed;opacity:.55}`] })
], BaseButton);
export { BaseButton };
