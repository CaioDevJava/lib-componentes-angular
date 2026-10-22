import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import type { ToastVariant } from '../types.js';
import * as i0 from "@angular/core";
export declare class BaseToast implements OnInit, OnDestroy {
    variant: ToastVariant;
    message: string;
    duration: number;
    dismissible: boolean;
    closed: EventEmitter<void>;
    private timer;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseToast, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseToast, "base-toast", never, { "variant": { "alias": "variant"; "required": false; }; "message": { "alias": "message"; "required": false; }; "duration": { "alias": "duration"; "required": false; }; "dismissible": { "alias": "dismissible"; "required": false; }; }, { "closed": "closed"; }, never, ["*"], true, never>;
}
