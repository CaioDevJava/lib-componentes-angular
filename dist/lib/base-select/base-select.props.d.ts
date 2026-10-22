import type { BaseOption } from '../types.js';
export interface BaseSelectProps {
    label: string;
    id: string;
    value: string;
    options: BaseOption[];
    disabled: boolean;
}
