import { Injectable } from '@angular/core';
import { Url } from '../shared/Config';
import { HttpClient } from '@angular/common/http';
import { Type } from '../model/type';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private url = Url.URL;


  constructor(private  http :HttpClient) { }
  public getType(): Observable<Type[]> {
    const apiUrl = `${this.url}type`;
    return this.http.get<Type[]>(apiUrl);
  }
  public supprimerType(id: string): Observable<any> {
    const apiUrl = `${this.url}type/${id}`;
    return this.http.delete(apiUrl);
  }
  public ajouterType(nouveauType: Type): Observable<Type> {
    const apiUrl = `${this.url}type`;
    return this.http.post<Type>(apiUrl, nouveauType);
  }
  public updateType(id: string, typeModifie: Type): Observable<Type> {
    const apiUrl = `${this.url}type/${id}`;
    return this.http.patch<Type>(apiUrl, typeModifie).pipe(
      catchError((error) => {
        console.error(`Une erreur s'est produite lors de la mise à jour du type avec l'ID ${id} :`, error);
        throw error;
      })
    );
  }
}
