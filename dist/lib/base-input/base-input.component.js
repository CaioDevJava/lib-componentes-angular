var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
let BaseInput = class BaseInput {
    label = '';
    id = 'base-input';
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
], BaseInput.prototype, "id", void 0);
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
    Component({ selector: 'base-input', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, templateUrl: './base-input.component.html', styleUrl: './base-input.component.scss' })
], BaseInput);
export { BaseInput };
