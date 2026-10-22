var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
let BaseInput = class BaseInput {
    label = '';
    value = '';
    placeholder = '';
    type = 'text';
    disabled = false;
    required = false;
    baseInput = new EventEmitter();
};
__decorate([
    Input()
], BaseInput.prototype, "label", void 0);
__decorate([
    Input()
], BaseInput.prototype, "value", void 0);
__decorate([
    Input()
], BaseInput.prototype, "placeholder", void 0);
__decorate([
    Input()
], BaseInput.prototype, "type", void 0);
__decorate([
    Input()
], BaseInput.prototype, "disabled", void 0);
__decorate([
    Input()
], BaseInput.prototype, "required", void 0);
__decorate([
    Output()
], BaseInput.prototype, "baseInput", void 0);
BaseInput = __decorate([
    Component({ selector: 'base-input', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<label><span>{{label}}</span><input [type]="type" [value]="value" [placeholder]="placeholder" [disabled]="disabled" [required]="required" (input)="baseInput.emit($any($event.target).value)" /></label>`, styles: [`:host{display:block}label{display:grid;gap:.35rem;color:var(--base-label,#374151)}input{border:1px solid var(--base-border,#d1d5db);border-radius:var(--base-radius,.5rem);font:inherit;padding:.65rem .75rem}`] })
], BaseInput);
export { BaseInput };
