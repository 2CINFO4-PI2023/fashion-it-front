import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Livreur } from '../model/Livreur';
import { Url } from '../shared/Config';

@Injectable({
  providedIn: 'root'
})
export class LivreursService {

  private url = Url.URL;

  constructor(private  http :HttpClient) { }

  public getLivreurs(): Observable<Livreur[]> {
    const apiUrl = `${this.url}livreurs`;
    return this.http.get<Livreur[]>(apiUrl);
  }
  public addLivreur(livreur: Livreur): Observable<Livreur> {
    const apiUrl = `${this.url}livreurs`;
    return this.http.post<Livreur>(apiUrl, livreur);
  }
  public deleteLivreur(_id: string): Observable<any> {
    const apiUrl = `${this.url}livreurs/${_id}`;
    return this.http.delete<Livreur>(apiUrl);
  }
  public getLivreurStatistics(): Observable<Livreur[]> {
    const apiUrl = `${this.url}notelivreur`;
    return this.http.get<any>(apiUrl);
    
  }
  public getmeilleur(): Observable<Livreur[]> {
    const apiUrl = `${this.url}notelivreur/Notelivreur`;
    return this.http.get<Livreur[]>(apiUrl);
  }
  public modifiercommade(_id: string, data: any): Observable<Livreur> {
    const apiUrl = `${this.url}livreurs/${_id}`;
    return this.http.patch<Livreur>(apiUrl, data);
  }

 
 
 

}
