import {Injectable} from '@angular/core';
import {isNullOrUndefined} from "util";
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import './rxjs-extensions.ts';

import {CabinetApi} from './../client';
import * as models from '../client/model/models';

@Injectable()
export class AuthService {

  authorizationDetails: models.CabinetAuthorizationDetails = null;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private cabinetApi: CabinetApi,
              private http: Http) {

    //FIXME
    this.http.get('assets/server-properties.json').subscribe(response => {
      const properties = response.json();
      cabinetApi.basePath = properties.basePath;
    });

  }

  login(username, password): Observable<any> {
    return this.cabinetApi.signIn(username, password)
  }

  logout(): void {
    this.authorizationDetails = null;
  }

  isLoggedIn() {
    if (!isNullOrUndefined(this.authorizationDetails)) {
      return true;
    } else {
      return false;
    }
  }

}
