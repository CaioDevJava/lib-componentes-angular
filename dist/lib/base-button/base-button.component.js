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
    loadingText = 'Carregando…';
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
], BaseButton.prototype, "loadingText", void 0);
__decorate([
    Input()
], BaseButton.prototype, "type", void 0);
__decorate([
    Output()
], BaseButton.prototype, "baseClick", void 0);
BaseButton = __decorate([
    Component({ selector: 'base-button', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, templateUrl: './base-button.component.html', styleUrl: './base-button.component.scss' })
], BaseButton);
export { BaseButton };
