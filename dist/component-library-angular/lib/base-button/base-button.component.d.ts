import { EventEmitter } from '@angular/core';
import type { BaseVariant } from '../types.js';
import * as i0 from "@angular/core";
export declare class BaseButton {
    label: string;
    variant: BaseVariant;
    disabled: boolean;
    loading: boolean;
    loadingText: string;
    type: 'button' | 'submit' | 'reset';
    baseClick: EventEmitter<MouseEvent>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseButton, "base-button", never, { "label": { "alias": "label"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "loadingText": { "alias": "loadingText"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, { "baseClick": "baseClick"; }, never, ["*"], true, never>;
}
