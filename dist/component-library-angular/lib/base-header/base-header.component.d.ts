import { EventEmitter } from '@angular/core';
import type { HeaderPosition, HeaderNavItem } from './base-header.props';
import * as i0 from "@angular/core";
export declare class BaseHeader {
    position: HeaderPosition;
    brandTitle: string;
    brandLogo: string;
    navItems: HeaderNavItem[];
    navSelect: EventEmitter<HeaderNavItem>;
    brandClick: EventEmitter<void>;
    mobileMenuOpen: boolean;
    toggleMobileMenu(): void;
    onNavClick(item: HeaderNavItem): void;
    onBrandClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseHeader, "base-header", never, { "position": { "alias": "position"; "required": false; }; "brandTitle": { "alias": "brandTitle"; "required": false; }; "brandLogo": { "alias": "brandLogo"; "required": false; }; "navItems": { "alias": "navItems"; "required": false; }; }, { "navSelect": "navSelect"; "brandClick": "brandClick"; }, never, ["[actions]", "[mobile-actions]"], true, never>;
}
