import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from '../model/commande';
import { Observable } from 'rxjs/internal/Observable';
import { Url } from '../shared/Config';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root' // ou 'any' si vous souhaitez fournir le service à un module spécifique
})
export class CommandeService{

  private url = Url.URL;

  constructor(private  http :HttpClient) { }

  public getcommande(): Observable<Commande[]> {
    const apiUrl = `${this.url}commande`;
    return this.http.get<Commande[]>(apiUrl);
    
  }
  public addcommande(commande: Commande): Observable<Commande> {
    const apiUrl = `${this.url}commande`;
    return this.http.post<Commande>(apiUrl, commande);
  }
  public deletecommande(_id: string): Observable<any> {
    const apiUrl = `${this.url}commande/${_id}`;
    return this.http.delete<Commande>(apiUrl);
  }
  public localisationcommande(_id: string): Observable<any> {
    const apiUrl = `${this.url}commande/${_id}`;
    return this.http.get<Commande>(apiUrl);
  }
  public modifiercommade(_id: string, data: any): Observable<Commande> {
    const apiUrl = `${this.url}commande/${_id}`;
    return this.http.patch<Commande>(apiUrl, data);
  }
  
}



