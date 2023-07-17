import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl ='http://localhost:9090/categorie'; //Remplacez l'URL

  constructor(private http: HttpClient) { }
  

  getAllCategories(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
