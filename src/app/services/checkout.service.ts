import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private apiUrl = 'http://localhost:3300/';

  constructor(private http: HttpClient) { }

  createPaymentIntent(amount: number) {
    const payload = { amount };

    return this.http.post<any>(`${this.apiUrl}/payment-intent`, payload);
  }
}
