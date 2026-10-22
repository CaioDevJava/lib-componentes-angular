var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
let BaseToast = class BaseToast {
    variant = 'info';
};
__decorate([
    Input()
], BaseToast.prototype, "variant", void 0);
BaseToast = __decorate([
    Component({ selector: 'base-toast', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="toast" [class]="variant" role="status"><ng-content></ng-content></div>`, styles: [`:host{display:block}.toast{border-left:.3rem solid var(--base-primary,#2563eb);border-radius:var(--base-radius,.5rem);box-shadow:0 .5rem 1.5rem #0002;padding:.8rem 1rem}.success{border-color:#16a34a}.warning{border-color:#d97706}.error{border-color:#dc2626}`] })
], BaseToast);
export { BaseToast };
