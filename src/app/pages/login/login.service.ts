import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public login(username: string, password: string) {
    return this.httpClient.post(environment.baseUrl+'/login', {
      username,
      password,
    });
  }
}
