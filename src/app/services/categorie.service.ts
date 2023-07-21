import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categorie} from "../models/categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiUrl = 'http://localhost:3300/categorie';

  constructor(private http: HttpClient) {}

  getAllCats(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getCatById(id: string): Observable<Categorie> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Categorie>(url);
  }
  deleteCatById(id: string): Observable<Categorie> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Categorie>(url);
  }
  updateCatById(id: string,categorie:Categorie): Observable<Categorie> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Categorie>(url,categorie);
  }
  addCat(categorie:Categorie): Observable<Categorie> {
    const url = `${this.apiUrl}/`;
    return this.http.post<Categorie>(url,categorie);
  }
}
