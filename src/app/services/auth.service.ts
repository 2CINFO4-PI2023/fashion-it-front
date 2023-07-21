import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private connectUrl = 'http://localhost:3300';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.connectUrl}/api/register`, user).pipe(
      catchError(this.handleError)
    );
  }


  logout(): Observable<any> {
    return this.http.get(`${this.connectUrl}/api/logout`).pipe(
      catchError(this.handleError)
    );
  }

  login(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post(`${this.connectUrl}/api/login`, payload).pipe(
      catchError(this.handleError)
    );
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
        .pipe(catchError(this.handleError));
    } else {
      return throwError('Invalid callback URL');
    }
  }


  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
