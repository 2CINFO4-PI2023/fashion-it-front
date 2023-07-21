import { Component } from '@angular/core';
import {Produit} from "../../models/produit";
import {BasketService} from "../../services/basket.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  productsInCart: Produit[] = [];

  constructor(private basketService: BasketService,
              private toastr:ToastrService) {
    this.productsInCart = this.basketService.getBasketItems();
  }

  removeFromCart(product:Produit){
    this.basketService.removeFromBasket(product);
    this.toastr.success('Item removed from basket','Item Removal');
    location.reload();
  }

}
