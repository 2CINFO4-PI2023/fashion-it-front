import { Component } from '@angular/core';
import {Produit} from "../../models/produit";
import {ProduitService} from "../../services/produit.service";
import {MatDialog} from "@angular/material/dialog";
import {AddproductComponent} from "../addproduct/addproduct.component";
import {BasketService} from "../../services/basket.service";




@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.scss']
})


export class UserdashComponent {

  productcards: Produit[] = [];

  constructor(private productService: ProduitService,
              private dialog: MatDialog,
              private basketService: BasketService
  ) {}
  ngOnInit(): void {
    this.productService.getProductsByUserId(localStorage.getItem('id')!).subscribe((products) => {
      this.productcards = products;
    });
    console.log(this.productcards)
    console.log(this.basketItemsCount())
  }
  openModal(): void {
    const dialogRef = this.dialog.open(AddproductComponent, {
      maxWidth: '100vw', // Set the maximum width to the viewport width
      maxHeight: '100vh', // Set the maximum height to the viewport height
      width: '600px', // Set the width to 'auto'
      height: 'auto', // Set the height to 'auto'
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any logic after the modal is closed (e.g., refresh the product list)
    });
  }
  addToBasket(product: Produit) {
    console.log('here')
    this.basketService.addToBasket(product);
    console.log(this.basketItemsCount())
  }

  basketItemsCount(): number {
    return this.basketService.getBasketItems().length;
  }



}
