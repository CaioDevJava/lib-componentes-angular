import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BaseChip {
    label: string;
    removable: boolean;
    removeLabel: string;
    backgroundColor: string;
    textColor: string;
    baseRemove: EventEmitter<void>;
    removed: EventEmitter<void>;
    onRemove(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseChip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseChip, "base-chip", never, { "label": { "alias": "label"; "required": false; }; "removable": { "alias": "removable"; "required": false; }; "removeLabel": { "alias": "removeLabel"; "required": false; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; }, { "baseRemove": "baseRemove"; "removed": "removed"; }, never, ["*"], true, never>;
}
