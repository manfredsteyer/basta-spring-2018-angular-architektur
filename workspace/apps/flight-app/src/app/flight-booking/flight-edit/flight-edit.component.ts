import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CanExitComponent } from '../../shared/exit/exit.guard';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit, CanExitComponent {

  id: string;
  showDetails: string;

  showWarning = false;
  sender: Observer<boolean>;


  constructor(private route: ActivatedRoute) {
  }



  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }

  decide(decision: boolean): void {
    this.showWarning = false;
    this.sender.next(decision);
    this.sender.complete();
  }

  canExit(): Observable<boolean> {
    return Observable.create((sender: Observer<boolean>) => {
      this.sender = sender;
      this.showWarning = true;
    });
  }

  remove() {
    console.debug('remove is not implemented yet.');
  }

}
