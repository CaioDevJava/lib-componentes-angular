import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BaseToggle {
    checked: boolean;
    disabled: boolean;
    label: string;
    checkedChange: EventEmitter<boolean>;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseToggle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseToggle, "base-toggle", never, { "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, { "checkedChange": "checkedChange"; }, never, never, true, never>;
}
