import { EventEmitter } from '@angular/core';
export declare class BaseModal {
    open: boolean;
    title: string;
    titulo: string;
    description: string;
    descricao: string;
    primaryButton: string;
    secondaryButton: string;
    baseClose: EventEmitter<void>;
    eventoPrimaryButton: EventEmitter<void>;
    eventoSecundaryButton: EventEmitter<void>;
    get heading(): string;
    get body(): string;
}
