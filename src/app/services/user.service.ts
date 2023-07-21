import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from "rxjs/operators";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3300/api/user';
  selectedUserId: any;
  constructor(private http: HttpClient) {}


  findAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  findUser(_id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/find/`,_id);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, user);
  }

  deleteUser(_id: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/delete/`,_id);
  }

  editUser(_id: string, userData: any): Observable<any> {
    userData._id = _id;
    console.log(userData);
    return this.http.post(`${this.baseUrl}/update/`, userData);
  }

  activatePremium(_id: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/premium`, {_id});
  }

  findUserByUsername(username: string): Observable<User> {
    return this.http.post<any>(`${this.baseUrl}/findusername`, { username }).pipe(
      map(response => {
        const userData = response.response;
        return this.setFromJson(userData);
      }),
      catchError(this.handleError)
    );
  }



  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
  private setFromJson(response: any): User {
    const user = new User();
    user._id = response._id;
    user.username = response.username;
    user.email = response.email;
    user.password = response.password;
    user.age = response.age;
    user.type = response.type;
    user.adresse = response.adresse;
    user.genre = response.genre;
    user.phone = response.phone;
    user.role = response.role;
    user.premium = response.premium;
    return user;
  }

}
