import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private readonly basketKey = 'basketItems';
  private basketItems: Produit[] = [];

  constructor() {
    this.loadBasket();
  }

  private saveBasket(): void {
    localStorage.setItem(this.basketKey, JSON.stringify(this.basketItems));
  }

  private loadBasket(): void {
    const savedBasket = localStorage.getItem(this.basketKey);
    if (savedBasket) {
      this.basketItems = JSON.parse(savedBasket);
    }
  }

  addToBasket(item: Produit): void {
    this.basketItems.push(item);
    this.saveBasket();
  }

  getBasketItems(): Produit[] {
    return this.basketItems;
  }

  removeFromBasket(item: Produit): void {
    this.basketItems = this.basketItems.filter((basketItem) => basketItem._id !== item._id);
    this.saveBasket();
  }
}
