import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BaseCheckbox {
    checked: boolean;
    disabled: boolean;
    indeterminate: boolean;
    label: string;
    baseChange: EventEmitter<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseCheckbox, "base-checkbox", never, { "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "indeterminate": { "alias": "indeterminate"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, { "baseChange": "baseChange"; }, never, ["*"], true, never>;
}
