import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from "rxjs/operators";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) {}


  findAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/findall`);
  }

  findUser(userID: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/finduser/${userID}`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/adduser`, user);
  }

  deleteUser(userID: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteuser/${userID}`);
  }

  editUser(_id: string, userData: any): Observable<any> {
    userData._id = _id;
    console.log(userData);
    return this.http.post(`${this.baseUrl}/update/`, userData);
  }

  activatePremium(userID: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/activatepremium/${userID}`, {});
  }

  findUserByUsername(username: string): Observable<any> {
    // return this.http.post<any>(`${this.baseUrl}/findusername`, { username }).pipe(
    //   map(response => {
    //     const userData = response.response;
    //     return this.setFromJson(userData);
    //   }),
    //   catchError(this.handleError)
    // );
    return this.http.post(`${this.baseUrl}/findusername/`, {username});

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
