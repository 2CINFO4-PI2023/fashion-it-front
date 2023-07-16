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
}
