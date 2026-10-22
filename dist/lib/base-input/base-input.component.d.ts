import { EventEmitter } from '@angular/core';
export declare class BaseInput {
    label: string;
    id: string;
    value: string;
    placeholder: string;
    type: string;
    disabled: boolean;
    required: boolean;
    baseInput: EventEmitter<string>;
}
