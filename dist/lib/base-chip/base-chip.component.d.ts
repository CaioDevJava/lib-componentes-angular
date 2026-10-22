import { EventEmitter } from '@angular/core';
export declare class BaseChip {
    removable: boolean;
    removeLabel: string;
    baseRemove: EventEmitter<void>;
}
