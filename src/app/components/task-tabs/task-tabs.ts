import { Component, EventEmitter, Output } from '@angular/core';
import { tabName } from '../../model/model';

@Component({
  selector: 'app-task-tabs',
  imports: [],
  templateUrl: './task-tabs.html',
  styleUrl: './task-tabs.css',
})
export class TaskTabs {
  @Output() tabChange = new EventEmitter<tabName>();

  selectedTab : tabName = 'AllTask';

  selectTab(tab: tabName) {
    this.selectedTab = tab;
    this.tabChange.emit(tab);
  }

}
