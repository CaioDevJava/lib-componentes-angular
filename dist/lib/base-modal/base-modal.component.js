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
    titulo = '';
    description = '';
    descricao = '';
    primaryButton = '';
    secondaryButton = '';
    baseClose = new EventEmitter();
    eventoPrimaryButton = new EventEmitter();
    eventoSecundaryButton = new EventEmitter();
    get heading() { return this.title || this.titulo; }
    get body() { return this.description || this.descricao; }
};
__decorate([
    Input()
], BaseModal.prototype, "open", void 0);
__decorate([
    Input()
], BaseModal.prototype, "title", void 0);
__decorate([
    Input()
], BaseModal.prototype, "titulo", void 0);
__decorate([
    Input()
], BaseModal.prototype, "description", void 0);
__decorate([
    Input()
], BaseModal.prototype, "descricao", void 0);
__decorate([
    Input()
], BaseModal.prototype, "primaryButton", void 0);
__decorate([
    Input()
], BaseModal.prototype, "secondaryButton", void 0);
__decorate([
    Output()
], BaseModal.prototype, "baseClose", void 0);
__decorate([
    Output()
], BaseModal.prototype, "eventoPrimaryButton", void 0);
__decorate([
    Output()
], BaseModal.prototype, "eventoSecundaryButton", void 0);
BaseModal = __decorate([
    Component({ selector: 'base-modal', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, templateUrl: './base-modal.component.html', styleUrl: './base-modal.component.scss' })
], BaseModal);
export { BaseModal };
