import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../models/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'http://localhost:3000/produit';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getProductsByUserId(id: string): Observable<Produit[]> {
    const url = `${this.apiUrl}/user/${id}`;
    return this.http.get<Produit[]>(url);
  }

  getProductById(productId: string): Observable<Produit> {
    return this.http.get<Produit>(`${this.apiUrl}/${productId}`);
  }

  addProduct(product: Produit, imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('categorieId', product.categorieId);
    formData.append('user', product.user!);
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('prix', product.prix.toString());
    formData.append('marque', product.marque);
    formData.append('taille', product.taille);
    formData.append('couleur', product.couleur);
    formData.append('materieau', product.materieau);
    formData.append('image', imageFile, imageFile.name);
    formData.append('paymentIntentId', product.paymentIntentId!);

    return this.http.post(this.apiUrl, formData);
  }

  updateProduct(product: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.apiUrl}/${product._id}`, product);
  }

  deleteProduct(id: string): Observable<Produit> {
    return this.http.delete<Produit>(`${this.apiUrl}/${id}`);
  }

  addFavori(productId: string): Observable<Produit> {
    return this.http.put<Produit>(`${this.apiUrl}/${productId}/favori`, {});
  }

  createPaymentIntent(amount: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/payment-intent`, { amount });
  }

  searchProducts(params: any): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/search`, { params });
  }
}
