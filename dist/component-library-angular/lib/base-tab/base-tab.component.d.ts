import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface TabItem {
    id: string;
    title: string;
    content?: string;
}
export declare class BaseTab {
    tabs: TabItem[];
    activeId: string;
    tabChange: EventEmitter<string>;
    selectTab(id: string): void;
    get currentTab(): TabItem | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseTab, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseTab, "base-tab", never, { "tabs": { "alias": "tabs"; "required": false; }; "activeId": { "alias": "activeId"; "required": false; }; }, { "tabChange": "tabChange"; }, never, ["*"], true, never>;
}
