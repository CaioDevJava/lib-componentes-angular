var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
let BaseDropdown = class BaseDropdown {
    label = 'Opções';
    open = false;
};
__decorate([
    Input()
], BaseDropdown.prototype, "label", void 0);
BaseDropdown = __decorate([
    Component({ selector: 'base-dropdown', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="dropdown"><button type="button" [attr.aria-expanded]="open" (click)="open=!open">{{label}}</button>@if (open) { <div class="menu"><ng-content /></div> }</div>`, styles: [`:host{display:inline-block}.dropdown{position:relative}.menu{background:white;border:1px solid var(--base-border,#d1d5db);min-width:10rem;padding:.5rem;position:absolute;z-index:5}`] })
], BaseDropdown);
export { BaseDropdown };
