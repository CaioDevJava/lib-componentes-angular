import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BaseCard {
    title: string;
    imageUrl: string;
    clickable: boolean;
    cardClick: EventEmitter<MouseEvent>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseCard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseCard, "base-card", never, { "title": { "alias": "title"; "required": false; }; "imageUrl": { "alias": "imageUrl"; "required": false; }; "clickable": { "alias": "clickable"; "required": false; }; }, { "cardClick": "cardClick"; }, never, ["*"], true, never>;
}
