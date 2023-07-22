import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiUrl = 'http://localhost:3000/categorie';

  constructor(private http: HttpClient) {}

  getAllCats(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
