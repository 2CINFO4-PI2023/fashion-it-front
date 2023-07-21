import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import {Router} from "@angular/router";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private connectUrl = 'http://localhost:3300';

  _id:any;
  constructor(private http: HttpClient
  ,
              private router:Router,
              private userService:UserService) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.connectUrl}/api/register`, user).pipe(
      catchError(this.handleError)
    );
  }

  logout(): Observable<any> {
    return this.http.get(`${this.connectUrl}/api/logout`).pipe(
      tap(() => {
        localStorage.clear();
        this.router.navigate(['/']);
      }),
      catchError(this.handleError)
    );
  }

  login(username: string, password: string): Observable<string> {
    const payload = { username, password };
    return this.http.post<any>(`${this.connectUrl}/api/login`, payload).pipe(
      tap(response => {
        const token = response.token;
        const decodedToken: any = jwt_decode(token);
        this.userService.findUserByUsername(decodedToken.username).subscribe(response=>{
          this._id=response._id;
        });
        localStorage.setItem('id',this._id);
        localStorage.setItem('token', token);
        localStorage.setItem('username', decodedToken.username);
        localStorage.setItem('email', decodedToken.email);
      }),
      map(response => response.message),
      catchError(this.handleError)
    );
    console.log(localStorage)
  }
  changePassword(userId: string): Observable<any> {
    return this.http.post(`${this.connectUrl}/api/password`, { _id: userId });
  }
  googleLogin(): void {
    window.location.href = `${this.connectUrl}/api/google`;
  }

  handleGoogleCallback(): Observable<any> {
    if (window.location.pathname === '/api/google/callback') {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      return this.http
        .post(`${this.connectUrl}/api/google/callback`, { code })
        .pipe(
          tap(response => {
          }),
          catchError(this.handleError)
        );
    } else {
      return throwError('Invalid callback URL');
    }
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
