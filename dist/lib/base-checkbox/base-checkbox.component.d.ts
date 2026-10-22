import { EventEmitter } from '@angular/core';
export declare class BaseCheckbox {
    checked: boolean;
    disabled: boolean;
    indeterminate: boolean;
    label: string;
    baseChange: EventEmitter<boolean>;
}
