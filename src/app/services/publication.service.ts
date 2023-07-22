import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from '../models/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private apiUrl = 'http://localhost:3000/publication'; // Replace with your Node.js server API endpoint

  constructor(private http: HttpClient) {}

  getAllPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.apiUrl);
  }

  createPublication(publication: Publication, content: string | File): Observable<Publication> {
    const formData: FormData = new FormData();
    formData.append('title', publication.title);
    formData.append('contentType', publication.contentType);

    if (publication.contentType === 'text') {
      formData.append('content', content as string);
    } else if (publication.contentType === 'image' && content instanceof File) {
      formData.append('content', content as File);
    }

    return this.http.post<Publication>(this.apiUrl, formData);
  }
  

  updatePublication(id: string, publication: Publication): Observable<Publication> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Publication>(url, publication);
  }

  getPublicationById(id: string): Observable<Publication> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Publication>(url);
  }

  deletePublication(id: string): Observable<Publication> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Publication>(url);
  }

  createComment(publicationId: string, comment: { userId: string; content: string }): Observable<Publication> {
    const url = `${this.apiUrl}/${publicationId}/comments`;
    return this.http.post<Publication>(url, comment);
  }

  addRating(publicationId: string, rating: { userId: string; rating: number }): Observable<Publication> {
    const url = `${this.apiUrl}/${publicationId}/ratings`;
    return this.http.post<Publication>(url, rating);
  }
}
