import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BaseInput {
    label: string;
    id: string;
    value: string;
    placeholder: string;
    type: string;
    disabled: boolean;
    required: boolean;
    state: 'default' | 'success' | 'error' | 'warning';
    helperText: string;
    baseInput: EventEmitter<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseInput, "base-input", never, { "label": { "alias": "label"; "required": false; }; "id": { "alias": "id"; "required": false; }; "value": { "alias": "value"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "type": { "alias": "type"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; "state": { "alias": "state"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; }, { "baseInput": "baseInput"; }, never, never, true, never>;
}
