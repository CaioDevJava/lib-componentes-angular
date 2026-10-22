import { EventEmitter } from '@angular/core';
import type { BaseOption } from '../types.js';
import * as i0 from "@angular/core";
export declare class BaseSelect {
    label: string;
    id: string;
    value: string;
    options: BaseOption[];
    disabled: boolean;
    required: boolean;
    state: 'default' | 'success' | 'error' | 'warning';
    helperText: string;
    baseChange: EventEmitter<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseSelect, "base-select", never, { "label": { "alias": "label"; "required": false; }; "id": { "alias": "id"; "required": false; }; "value": { "alias": "value"; "required": false; }; "options": { "alias": "options"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; "state": { "alias": "state"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; }, { "baseChange": "baseChange"; }, never, never, true, never>;
}
