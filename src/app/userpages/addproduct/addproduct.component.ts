import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Produit} from "../../models/produit";
import {ProduitService} from "../../services/produit.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {BasketService} from "../../services/basket.service";
import {CategorieService} from "../../services/categorie.service";
import {Categorie} from "../../models/categorie";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {

  newProduct: Produit = {
    user:'',
    categorieId: '',
    name: '',
    description: '',
    prix: '',
    marque: '',
    taille: 'XS',
    couleur: '',
    materieau: 'Coton',
    image: { url: '', fileName: '' },
  };
  imageFile: File | null = null;
  newProductForm!: FormGroup;
  categorieList: Categorie[] = [];


  constructor(
    private dialogRef: MatDialogRef<AddproductComponent>,
    private productService: ProduitService ,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private categorieService:CategorieService
  ) {
    this.initForm();
    this.loadCategories();
  }
  loadCategories(): void {
    this.categorieService.getAllCats().subscribe((categories) => {
      this.categorieList = categories;
    });
  }
  onSubmit(): void {
    console.log('here')
    console.log(this.newProductForm.valid)
    console.log(this.newProductForm)
    console.log(this.imageFile)
    if (this.newProductForm.valid) {
      const formValues = this.newProductForm.value;
      if (this.imageFile && formValues.name && formValues.prix) {
        const newProduct: Produit = {
          user:localStorage.getItem('id')!,
          categorieId: formValues.categorieId,
          name: formValues.name,
          description: formValues.description,
          prix: formValues.prix,
          marque: formValues.marque,
          taille: formValues.taille,
          couleur: formValues.couleur,
          materieau: formValues.materieau,
          image: { url: '', fileName: '' },
        };
        this.productService.addProduct(newProduct, this.imageFile).subscribe((result) => {
          this.toastr.success(result, 'Added Successfully');
          console.log(result);
          this.dialogRef.close(); // Close the modal after the product is added
        },error1 => {
          this.toastr.error(error1, 'Something went wrong please try again');
        })
      }
    }
    this.toastr.error('Please verify all fields before submitting', 'Error adding product');

  }


  closeModal(): void {
    this.dialogRef.close();
  }

  onImageChange(event: any): void {
    const files = event.target.files;
    if (files.length > 0) {
      this.imageFile = files[0];
    }
  }
  private initForm() {
    this.newProductForm = this.formBuilder.group({
      categorieId: ['',Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', Validators.required],
      marque: ['', Validators.required],
      taille: ['', Validators.required],
      couleur: ['', Validators.required],
      materieau: ['', Validators.required],
      image: [null],
      paymentIntentId: [''],
    });
  }

}
