import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserForLogin, UserForRegister } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authUser(user: UserForLogin): Observable<UserForLogin> {
    return this.http.post<UserForLogin>('https://localhost:7102/api/account/login', user);
  }

  registerUser(user: UserForRegister){
    return this.http.post<UserForRegister>('https://localhost:7102/api/account/register', user);
  }
}
