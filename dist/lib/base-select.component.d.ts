import { EventEmitter } from '@angular/core';
import type { BaseOption } from './types.js';
export declare class BaseSelect {
    label: string;
    value: string;
    options: BaseOption[];
    disabled: boolean;
    baseChange: EventEmitter<string>;
}
