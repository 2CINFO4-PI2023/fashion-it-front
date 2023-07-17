import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';





@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl: string = environment.apiUrl; //Remplacez l'URL

  constructor(private http: HttpClient) { }
  // récupérer la liste des catégories
  getCategoriesList(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/categorie`);
  }


  //ajouter une nouvelle catégorie 
  addCategorie(categories: any): Observable<any> {
    return this.http.post(`$${this.apiUrl}/categorie`,categories );
  }


  // mettre à jour une catégorie existante par ID
  updateCategorie(categorieId: string , updateCategories : any):Observable<any>{
    return this.http.put(`$${this.apiUrl}/categorie/${categorieId}`,updateCategories);
  }
  

  // supprimer une catégorie
deleteCategorie(categorieId: string):Observable<any>{
  return this.http.delete(`$${this.apiUrl}/categorie/${categorieId}`);
}
}
