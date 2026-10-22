var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
let BaseTooltip = class BaseTooltip {
    content = '';
};
__decorate([
    Input()
], BaseTooltip.prototype, "content", void 0);
BaseTooltip = __decorate([
    Component({ selector: 'base-tooltip', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<span class="target"><ng-content></ng-content><span class="tooltip" role="tooltip">{{content}}</span></span>`, styles: [`:host{display:inline-block;position:relative}.target:hover .tooltip,.target:focus-within .tooltip{display:block}.tooltip{background:#111827;border-radius:.25rem;color:white;display:none;font-size:.8rem;padding:.35rem .5rem;position:absolute;white-space:nowrap;z-index:10}`] })
], BaseTooltip);
export { BaseTooltip };
