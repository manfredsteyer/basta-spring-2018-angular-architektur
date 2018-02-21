import { Component, OnInit } from '@angular/core';
import { TabbedPaneService } from '../tabbed-pane.service';

@Component({
  selector: 'bad',
  templateUrl: './bad.component.html',
  styleUrls: ['./bad.component.css']
})
export class BadComponent implements OnInit {

  constructor(private service: TabbedPaneService) { }

  ngOnInit() {
    setTimeout(() => {
      this.service.jump(1);
    }, 5000);
  }

}
