import { EventEmitter } from '@angular/core';
export declare class BaseModal {
    open: boolean;
    title: string;
    baseClose: EventEmitter<void>;
}
