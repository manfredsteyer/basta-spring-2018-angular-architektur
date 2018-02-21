import {Component} from '@angular/core';
import { LoggerService } from 'logger-lib';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private oauthService: OAuthService,
    logger: LoggerService) {
    


      
      logger.debug('Manfred was here!');
      logger.log('App started ...');




      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      this.oauthService.configure(authConfig);
      this.oauthService.loadDiscoveryDocumentAndTryLogin();

  }

}

