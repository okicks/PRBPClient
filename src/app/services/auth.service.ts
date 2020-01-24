import { Injectable, Output } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

const Api_Url = 'https://localhost:44327';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() getLoggedIn: EventEmitter<any> = new EventEmitter();
  @Output() getError: EventEmitter<any> = new EventEmitter();

  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  register (reguserData: RegisterUser) {
    return this.http.post(`${Api_Url}/api/account/Register`, reguserData,  {headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"})});
  }

  login(loginInfo) {
    const authString =
    `grant_type=password&username=${encodeURI(loginInfo.username)}&password=${encodeURI(loginInfo.password)}`;

    return this.http.post(`${Api_Url}/token`, authString, {headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"})}).subscribe((token: Token) => {
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      this.getLoggedIn.emit("true");
      this.router.navigate(['forum/category']);
    },
    error => this.getError.emit(error.error));
  }
  
  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) {
      return new Observable(observer => observer.next(false));
    }

    return this.http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeaders() });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);

    this.http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeaders() });
    this.getLoggedIn.emit("false");
    this.router.navigate(['/login']);
  }

  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}