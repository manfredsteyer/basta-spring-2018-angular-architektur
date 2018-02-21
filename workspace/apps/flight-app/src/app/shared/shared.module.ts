import {CommonModule} from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {CityPipe} from './pipes/city.pipe';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { ExitGuard } from './exit/exit.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClickWithWarningDirective } from './warning/flight-click-with-warning.directive';
import { ErrorHandlerService } from './errors/error-handler.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
    ClickWithWarningDirective
  ],
  providers: [ /* empty providers array */  ],
  exports: [
    CityPipe,
    ClickWithWarningDirective
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [    
        AuthGuard, 
        AuthService, // I regret nothing
        ExitGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
        {
          provide: ErrorHandler,
          useClass: ErrorHandlerService
        }
    ]
    }
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }

}
