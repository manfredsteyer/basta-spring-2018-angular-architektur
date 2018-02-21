import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthService {

    get userName(): string {
        let claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims['given_name'];
    }

    constructor(private oauthService: OAuthService) {

    }

    login() {
        this.oauthService.initImplicitFlow();
    }

    logout() {
        this.oauthService.logOut();
    }

}