import { Component, OnInit } from '@angular/core';
import { TabbedPaneService } from '../tabbed-pane.service';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private service: TabbedPaneService) { 

  }

  ngOnInit() {
  }

  prev(): void {
    this.service.jump(-1);
  }

  next(): void {
    this.service.jump(1);
  }
}
