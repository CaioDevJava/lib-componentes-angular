import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export interface CarouselItem {
    id: string;
    title?: string;
    imageUrl?: string;
    content?: string;
    linkUrl?: string;
}
export declare class BaseCarousel implements OnInit, OnDestroy {
    items: CarouselItem[];
    autoplay: boolean;
    interval: number;
    itemSelected: EventEmitter<CarouselItem>;
    itemClicked: EventEmitter<CarouselItem>;
    currentIndex: number;
    private timer;
    private cdr;
    ngOnInit(): void;
    ngOnDestroy(): void;
    startAutoplay(): void;
    stopAutoplay(): void;
    next(): void;
    prev(): void;
    goTo(index: number): void;
    onSlideClick(item?: CarouselItem): void;
    get currentItem(): CarouselItem | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseCarousel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseCarousel, "base-carousel", never, { "items": { "alias": "items"; "required": false; }; "autoplay": { "alias": "autoplay"; "required": false; }; "interval": { "alias": "interval"; "required": false; }; }, { "itemSelected": "itemSelected"; "itemClicked": "itemClicked"; }, never, ["*"], true, never>;
}
