var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
let BaseModal = class BaseModal {
    open = false;
    title = '';
    baseClose = new EventEmitter();
};
__decorate([
    Input()
], BaseModal.prototype, "open", void 0);
__decorate([
    Input()
], BaseModal.prototype, "title", void 0);
__decorate([
    Output()
], BaseModal.prototype, "baseClose", void 0);
BaseModal = __decorate([
    Component({ selector: 'base-modal', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (open) { <div class="backdrop"><section role="dialog" aria-modal="true" [attr.aria-label]="title"><header><h2>{{title}}</h2><button type="button" aria-label="Fechar" (click)="baseClose.emit()">×</button></header><ng-content /></section></div> }`, styles: [`:host{display:block}.backdrop{align-items:center;background:#1118278c;display:flex;inset:0;justify-content:center;padding:1rem;position:fixed;z-index:1000}.backdrop section{background:white;border-radius:var(--base-radius,.5rem);max-width:32rem;padding:1.25rem;width:100%}header{align-items:center;display:flex;justify-content:space-between}header button{background:transparent;border:0;font-size:1.25rem}`] })
], BaseModal);
export { BaseModal };
