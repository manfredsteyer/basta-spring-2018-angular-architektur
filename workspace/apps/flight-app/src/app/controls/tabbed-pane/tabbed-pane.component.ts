import { Component, OnInit, Input, AfterContentInit, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabbedPaneService } from '../tabbed-pane.service';

@Component({
  selector: 'tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.css'],
  viewProviders: [TabbedPaneService]
})
export class TabbedPaneComponent implements OnInit, AfterContentInit {

  @Input() activeId: number;
  @Output() activeIdChange = new EventEmitter<number>();


  get currentTab() {
    return this.tabs[this.activeId];
    // Hack: Assuming: activeId == index within the array
  }

  // .tabs
  get tabs(): TabComponent[] {
    if (!this.tabList) return [];
    return this.tabList.toArray();
  }

  @ContentChildren(TabComponent)
  tabList: QueryList<TabComponent>;

  constructor(private service: TabbedPaneService) { }

  ngOnInit() {
    this.service.jump$.subscribe(steps => {
      this.activate(this.activeId + steps);
    });
  }


  ngAfterContentInit() {
    this.activate(this.activeId);
  }

  activate(id: number): void {
    if (id !== this.activeId) {
      this.activeIdChange.next(id);
    }

    this.activeId = id;

    for(let tab of this.tabs) {
      tab.visible = (tab.id === id);
    }
  }


}
