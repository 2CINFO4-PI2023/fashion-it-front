import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Produit} from "../../models/produit";
import {ProduitService} from "../../services/produit.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update-product-modal',
  templateUrl: './update-product-modal.component.html',
  styleUrls: ['./update-product-modal.component.scss']
})
export class UpdateProductModalComponent {
  updateForm: FormGroup;

  constructor(
    private productService:ProduitService,
    private snackBar:MatSnackBar,
    private dialogRef: MatDialogRef<UpdateProductModalComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Produit
  ) {
    this.updateForm = this.formBuilder.group({
      name: [data.name, Validators.required],
      prix: [data.prix, [Validators.required, Validators.min(0)]],
      description: [data.description, Validators.required],
      marque: [data.marque, Validators.required],
      taille: [data.taille, Validators.required],
      couleur: [data.couleur, Validators.required],
      materieau: [data.materieau, Validators.required],
    });
  }

  onUpdate(): void {
    if (this.updateForm.valid) {
      const updatedProduct: Produit = {
        ...this.data,
        ...this.updateForm.value
      };

      this.productService.updateProduct(updatedProduct).subscribe(
        (updatedProductResponse) => {
          this.dialogRef.close(updatedProductResponse);
          this.snackBar.open('Product updated successfully!', 'Close', {
            duration: 2000,
          });
        },
        (error) => {
          this.snackBar.open('Error updating product', 'Close', {
            duration: 2000,
          });
        }
      );
    }
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
