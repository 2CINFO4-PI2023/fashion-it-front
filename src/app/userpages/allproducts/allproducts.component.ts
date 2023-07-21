import {Component, OnInit} from '@angular/core';
import {Produit} from "../../models/produit";
import {ProduitService} from "../../services/produit.service";
import {MatDialog} from "@angular/material/dialog";
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {
  productcards: Produit[] = [];
  filteredProductcards: Produit[] = [];
  searchTerm: string = '';
  constructor(private productService: ProduitService,
              private dialog: MatDialog,
              private basketService: BasketService
  ) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.productcards = products;
      this.filteredProductcards = products;

    });
    console.log(this.productcards)
  }
  onSearch(): void {
    if (!this.searchTerm) {
      this.filteredProductcards = this.productcards;
    } else {
      this.filteredProductcards = this.productcards.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  // Method to clear the search term
  clearSearch(): void {
    this.searchTerm = '';
    this.onSearch();
  }
}
