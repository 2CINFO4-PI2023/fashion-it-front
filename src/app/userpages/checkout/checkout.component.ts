import { Component } from '@angular/core';
import {Produit} from "../../models/produit";
import {BasketService} from "../../services/basket.service";
import {ToastrService} from "ngx-toastr";
import {CheckoutService} from "../../services/checkout.service";
import {StripeModule, StripeSource} from 'stripe-angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  productsInCart: Produit[] = [];

  constructor(private basketService: BasketService,
              private toastr:ToastrService,
              private checkoutService:CheckoutService,
              private stripeService: StripeModule) {
    this.productsInCart = this.basketService.getBasketItems();
  }

  removeFromCart(product:Produit){
    this.basketService.removeFromBasket(product);
    this.toastr.success('Item removed from basket','Item Removal');
    location.reload();
  }
  calculateTotalAmount(): number {
    let total = 0;
    for (const product of this.productsInCart) {
      total += Number(product.prix);
    }
    return total;
  }

}
