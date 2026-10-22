var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
let BaseCheckbox = class BaseCheckbox {
    checked = false;
    disabled = false;
    indeterminate = false;
    label = '';
    baseChange = new EventEmitter();
};
__decorate([
    Input()
], BaseCheckbox.prototype, "checked", void 0);
__decorate([
    Input()
], BaseCheckbox.prototype, "disabled", void 0);
__decorate([
    Input()
], BaseCheckbox.prototype, "indeterminate", void 0);
__decorate([
    Input()
], BaseCheckbox.prototype, "label", void 0);
__decorate([
    Output()
], BaseCheckbox.prototype, "baseChange", void 0);
BaseCheckbox = __decorate([
    Component({ selector: 'base-checkbox', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, templateUrl: './base-checkbox.component.html', styleUrl: './base-checkbox.component.scss' })
], BaseCheckbox);
export { BaseCheckbox };
