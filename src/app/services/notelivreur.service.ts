import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notelivreur } from '../model/notelivreur';
import { Observable } from 'rxjs/internal/Observable';
import { Url } from '../shared/Config';
@Injectable({
  providedIn: 'root'
})
export class NotelivreurService {
  private url = Url.URL;

  constructor(private  http :HttpClient) { }

  public getstatistique(): Observable<any> {
    const apiUrl = `${this.url}notelivreur`;
    return this.http.get<Notelivreur[]>(apiUrl);  
  }
 
  public addnotelivreur(Notelivreur: Notelivreur): Observable<Notelivreur> {
    const apiUrl = `${this.url}notelivreur`;
    return this.http.post<Notelivreur>(apiUrl, Notelivreur);
  }

}
