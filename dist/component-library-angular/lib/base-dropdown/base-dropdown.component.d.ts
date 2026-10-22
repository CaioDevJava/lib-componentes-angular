import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BaseDropdown {
    private elementRef;
    constructor(elementRef: ElementRef);
    label: string;
    open: boolean;
    toggle(): void;
    onClick(event: MouseEvent): void;
    onEscape(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseDropdown, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseDropdown, "base-dropdown", never, { "label": { "alias": "label"; "required": false; }; }, {}, never, ["*"], true, never>;
}
