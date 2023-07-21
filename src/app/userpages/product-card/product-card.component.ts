import {Component, Input} from '@angular/core';
import {Produit} from "../../models/produit";
import {BasketService} from "../../services/basket.service";
import {Router} from "@angular/router";
import {ProduitService} from "../../services/produit.service";
import {ConfirmationDialogComponent} from "../../components/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() productcard: Produit;
  constructor(
    private basketService: BasketService,
    private router: Router,
    private productService:ProduitService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {
  }
  addToBasket(product: Produit) {
    console.log('here')
    this.basketService.addToBasket(product);
  }
  isShowAddToCartButton(): boolean {
    // Check if the current URL contains '/allprod'
    return this.router.url.includes('/allprod');
  }
  isShowEditDeleteButtons(): boolean {
    // Check if the current URL contains '/allprod'
    return this.router.url.includes('/allprod'); //change to dashboard
  }
  deleteProduct(productId: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: 'Are you sure you want to delete this product?'
    });

    dialogRef.afterClosed().subscribe(() => {
        // User confirmed deletion
        this.productService.deleteProduct(productId).subscribe(
          (deletedProduct) => {
            // Handle successful deletion
            this.snackBar.open('Product deleted successfully!', 'Close', {
              duration: 2000,
            });
          location.reload()
          },
          (error) => {
            this.snackBar.open('Error deleting product', 'Close', {
              duration: 2000,
            });
          }
        );

    });
  }
  toggleFavorite(product: Produit): void {
    const isFavorite = !product.favoris;

    this.productService.addFavori(product._id!).subscribe(
      (updatedProduct) => {
        product.favoris = isFavorite;
        this.snackBar.open('Product added to favorites!', 'Close', {
          duration: 2000,
        });
      },
      (error) => {
        this.snackBar.open('Error adding product to favorites', 'Close', {
          duration: 2000,
        });
      }
    );
  }
}
