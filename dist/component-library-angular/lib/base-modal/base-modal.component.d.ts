import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BaseModal {
    open: boolean;
    title: string;
    size: 'sm' | 'md' | 'lg';
    description: string;
    primaryButton: string;
    secondaryButton: string;
    baseClose: EventEmitter<void>;
    closed: EventEmitter<void>;
    eventoPrimaryButton: EventEmitter<void>;
    eventoSecundaryButton: EventEmitter<void>;
    close(): void;
    onEscape(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseModal, "base-modal", never, { "open": { "alias": "open"; "required": false; }; "title": { "alias": "title"; "required": false; }; "size": { "alias": "size"; "required": false; }; "description": { "alias": "description"; "required": false; }; "primaryButton": { "alias": "primaryButton"; "required": false; }; "secondaryButton": { "alias": "secondaryButton"; "required": false; }; }, { "baseClose": "baseClose"; "closed": "closed"; "eventoPrimaryButton": "eventoPrimaryButton"; "eventoSecundaryButton": "eventoSecundaryButton"; }, never, ["*"], true, never>;
}
