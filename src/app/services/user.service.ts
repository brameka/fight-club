import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication.service';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private user: User = {
    username: 'test',
    password: 'test',
    firstName: 'firstname',
    lastName: 'lastname'
  };

  private users$: Observable<User[]>;
  private user$: Observable<User>;

  constructor(
      private http: Http,
      private authenticationService: AuthenticationService) {
  }

  getUsers(payload: any): Observable<User[]> {
    const users = [];
    for (let i = 0; i < 3; i++) {
      users.push(this.user);
    }
    this.users$ = Observable.of(users);
    return this.users$;
  }

  getRealUsers(): Observable<User[]> {
    // add authorization header with jwt token
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.get('/api/users', options).map((response: Response) => response.json());
  }

  getUser(id: string): Observable<User> {
    this.user$ = Observable.of(this.user);
    return this.user$;
  }
}
