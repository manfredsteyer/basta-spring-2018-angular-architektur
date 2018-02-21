import {HttpClientModule} from '@angular/common/http';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FlightApiModule} from '@flight-workspace/flight-api';

import {AppComponent} from './app.component';
import {APP_EXTRA_OPTIONS, APP_ROUTES} from './app.routes';
import {BasketComponent} from './basket/basket.component';
import {FlightBookingModule} from './flight-booking/flight-booking.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedModule} from './shared/shared.module';
import {SidebarComponent} from './sidebar/sidebar.component';

import { LoggerModule, LogFormatterService } from 'logger-lib';

import { CustomLogFormatter } from './logger/custom-log-formatter.service';
import { ControlsModule } from './controls/controls.module';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,

    LoggerModule.forRoot({
      enableDebug: false
    }),

    // FlightBookingModule, // This would prevent Lazy-Loading
    
    ControlsModule,

    OAuthModule.forRoot(),

    FlightApiModule.forRoot(),
    SharedModule.forRoot(),
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS})
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent
  ],
  providers: [
    /*{
      provide: LogFormatterService,
      useClass: CustomLogFormatter
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
