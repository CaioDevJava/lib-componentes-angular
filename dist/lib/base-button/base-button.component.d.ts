import { EventEmitter } from '@angular/core';
import type { BaseVariant } from '../types.js';
export declare class BaseButton {
    variant: BaseVariant;
    disabled: boolean;
    loading: boolean;
    loadingText: string;
    type: 'button' | 'submit' | 'reset';
    baseClick: EventEmitter<MouseEvent>;
}
