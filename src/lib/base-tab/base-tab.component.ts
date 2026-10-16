import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface TabItem {
  id: string;
  title: string;
  content?: string;
}

@Component({
  selector: 'base-tab',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-tab.component.html',
  styleUrl: './base-tab.component.scss'
})
export class BaseTab {
  @Input() tabs: TabItem[] = [];
  @Input() activeId = '';
  @Output() tabChange = new EventEmitter<string>();

  selectTab(id: string) {
    this.activeId = id;
    this.tabChange.emit(id);
  }

  get currentTab(): TabItem | undefined {
    return this.tabs.find(t => t.id === this.activeId) || this.tabs[0];
  }
}
