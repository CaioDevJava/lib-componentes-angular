export type BaseVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ToastVariant = 'success' | 'info' | 'warning' | 'error';
export interface BaseOption { value: string; label: string; disabled?: boolean; }
export interface BaseTableColumn<T = Record<string, unknown>> { key: Extract<keyof T, string>; label: string; }
