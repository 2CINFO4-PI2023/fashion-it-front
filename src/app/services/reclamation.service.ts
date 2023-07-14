import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Reclamation } from '../model/reclamation';
import { Url } from '../shared/Config';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private url = Url.URL;

  constructor(private  http :HttpClient) { }

  public getReclamation(): Observable<Reclamation[]> {
    const apiUrl = `${this.url}reclamation`;
    return this.http.get<Reclamation[]>(apiUrl);
  }

  public supprimerReclamation(id: string): Observable<any> {
    const apiUrl = `${this.url}reclamation/${id}`;
    return this.http.delete(apiUrl);
  }

  public rechercherParEmail(mail: string): Observable<Reclamation[]> {
    const encodedEmail = encodeURIComponent(mail); // Encodez l'email pour les URL
    const apiUrl = `${this.url}reclamation/${encodedEmail}`;
    return this.http.get<Reclamation[]>(apiUrl);
  }

  getReclamationStats() {
    return this.http.get<any[]>(`${this.url}reclamation/reclamation-stats`);
  }
  
}
