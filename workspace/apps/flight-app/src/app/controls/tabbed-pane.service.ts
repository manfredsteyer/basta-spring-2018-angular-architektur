import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TabbedPaneService {

    private jumpSubject = new Subject<number>();

    // Reading
    public jump$ = this.jumpSubject.asObservable();

    public jump(steps: number): void {
        // Here you could check the steps variable
        this.jumpSubject.next(steps);
    }

}