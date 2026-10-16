import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnDestroy, OnInit, ChangeDetectorRef, inject } from '@angular/core';

export interface CarouselItem {
  id: string;
  title?: string;
  imageUrl?: string;
  content?: string;
  linkUrl?: string;
}

@Component({
  selector: 'base-carousel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-carousel.component.html',
  styleUrl: './base-carousel.component.scss'
})
export class BaseCarousel implements OnInit, OnDestroy {
  @Input() items: CarouselItem[] = [];
  @Input() autoplay = true; // Enabled by default
  @Input() interval = 5000; // 5 seconds default interval
  @Output() itemSelected = new EventEmitter<CarouselItem>();
  @Output() itemClicked = new EventEmitter<CarouselItem>();

  currentIndex = 0;
  private timer: any;
  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    if (this.autoplay && this.items.length > 1) {
      this.startAutoplay();
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.stopAutoplay();
    this.timer = setInterval(() => {
      this.next();
    }, this.interval);
  }

  stopAutoplay() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  next() {
    if (!this.items.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.itemSelected.emit(this.items[this.currentIndex]);
    this.cdr.markForCheck();
  }

  prev() {
    if (!this.items.length) return;
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.itemSelected.emit(this.items[this.currentIndex]);
    this.cdr.markForCheck();
  }

  goTo(index: number) {
    if (index >= 0 && index < this.items.length) {
      this.currentIndex = index;
      this.itemSelected.emit(this.items[this.currentIndex]);
      this.cdr.markForCheck();
    }
  }

  onSlideClick(item?: CarouselItem) {
    if (item) {
      this.itemClicked.emit(item);
      if (item.linkUrl) {
        window.open(item.linkUrl, '_blank');
      }
    }
  }

  get currentItem(): CarouselItem | undefined {
    return this.items[this.currentIndex];
  }
}
