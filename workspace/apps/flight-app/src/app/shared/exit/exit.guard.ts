import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FlightEditComponent } from '../../flight-booking/flight-edit/flight-edit.component';
import { Observable } from 'rxjs/Observable';

export interface CanExitComponent {
    canExit(): Observable<boolean>;
}

@Injectable()
export class ExitGuard implements CanDeactivate<CanExitComponent> {
    
    canDeactivate(
        component: CanExitComponent, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        
            return component.canExit();

    }

    

}