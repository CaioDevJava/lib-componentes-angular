import { EventEmitter } from '@angular/core';
import type { PaginationPageItem } from './base-pagination.props';
import * as i0 from "@angular/core";
export declare class BasePagination {
    currentPage: number;
    totalItems: number;
    pageSize: number;
    pageSizeOptions: number[];
    showPageSizeOptions: boolean;
    siblingCount: number;
    pageChange: EventEmitter<number>;
    pageSizeChange: EventEmitter<number>;
    Math: Math;
    get totalPages(): number;
    get pages(): PaginationPageItem[];
    goToPage(page: number | '...'): void;
    onPageSizeChange(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BasePagination, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BasePagination, "base-pagination", never, { "currentPage": { "alias": "currentPage"; "required": false; }; "totalItems": { "alias": "totalItems"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "pageSizeOptions": { "alias": "pageSizeOptions"; "required": false; }; "showPageSizeOptions": { "alias": "showPageSizeOptions"; "required": false; }; "siblingCount": { "alias": "siblingCount"; "required": false; }; }, { "pageChange": "pageChange"; "pageSizeChange": "pageSizeChange"; }, never, never, true, never>;
}
