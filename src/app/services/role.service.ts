import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Role} from '../models/role';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiUrl = 'http://localhost:3300/api/role';

  constructor(private http: HttpClient) {}

  getAllRoles(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }

  addRole(role: Role): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, role);
  }

  findRole(roleID: string): Observable<Role> {
    return this.http.post<Role>(`${this.apiUrl}/find`, { roleID });
  }

  editRole(role: Role): Observable<any> {
    return this.http.post(`${this.apiUrl}/update`, role);
  }

  deleteRole(roleName: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/delete`, { roleName });
  }
}
