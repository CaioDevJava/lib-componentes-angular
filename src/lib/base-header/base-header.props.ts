export type HeaderPosition = 'static' | 'fixed' | 'sticky';

export interface HeaderNavItem {
  label: string;
  url?: string;
  active?: boolean;
  id?: string;
}
