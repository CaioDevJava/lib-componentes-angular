var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
let BaseSelect = class BaseSelect {
    label = '';
    id = 'base-select';
    value = '';
    options = [];
    disabled = false;
    baseChange = new EventEmitter();
};
__decorate([
    Input()
], BaseSelect.prototype, "label", void 0);
__decorate([
    Input()
], BaseSelect.prototype, "id", void 0);
__decorate([
    Input()
], BaseSelect.prototype, "value", void 0);
__decorate([
    Input()
], BaseSelect.prototype, "options", void 0);
__decorate([
    Input()
], BaseSelect.prototype, "disabled", void 0);
__decorate([
    Output()
], BaseSelect.prototype, "baseChange", void 0);
BaseSelect = __decorate([
    Component({ selector: 'base-select', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, templateUrl: './base-select.component.html', styleUrl: './base-select.component.scss' })
], BaseSelect);
export { BaseSelect };
