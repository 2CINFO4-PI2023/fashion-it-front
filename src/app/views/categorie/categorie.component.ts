import { Component, OnInit } from '@angular/core';
import {CategorieService} from "../../services/categorie.service";
import {Categorie} from "../../models/categorie";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  categorieList: Categorie[] = [];
  showAddCategorieModal: boolean = false;
  selectedCategorie: Categorie | null = null;
  editedCategorie: Categorie | null = null;
  showEditCategorieModal: boolean = false;


  newCategorie: Categorie = {
    name: '',
    description: '',
  };

  constructor(private categorieService: CategorieService
  ,
              private toastr:ToastrService) {
  }
  ngOnInit(): void {
    this.loadCategories();

  }
  loadCategories(): void {
    this.categorieService.getAllCats().subscribe((categories) => {
      this.categorieList = categories;
    });
  }

  openAddCategorieModal(): void {
    this.showAddCategorieModal = true;
  }

  closeAddCategorieModal(): void {
    this.showAddCategorieModal = false;
    this.newCategorie = {
      name: '',
      description: '',
    };
  }

  addCategorie(): void {
    if (this.newCategorie.name && this.newCategorie.description) {
      this.categorieService.addCat(this.newCategorie).subscribe((result) => {
        this.toastr.success('Category added successfully!', 'Success');
        this.loadCategories(); // Reload the categories after adding a new one
        this.closeAddCategorieModal(); // Close the modal after adding the category
      });
    }
  }



  openDeleteConfirmation(categorie: Categorie): void {
    console.log(categorie);
    this.selectedCategorie = categorie;
    this.deleteCategorie();
  }

  deleteCategorie(): void {
    console.log('here');
    if (this.selectedCategorie) {
      this.categorieService.deleteCatById(this.selectedCategorie._id).subscribe(() => {
        this.toastr.success('Category deleted successfully!', 'Success');
        this.loadCategories();
        this.selectedCategorie = null;
      });
    }
  }

  closeDeleteConfirmation(): void {
    this.selectedCategorie = null; // Reset selected category when the modal is closed
  }

  openEditCategorieModal(categorie: Categorie): void {
    this.editedCategorie = { ...categorie }; // Make a copy of the category to avoid modifying the original one
    this.showEditCategorieModal = true;
  }

  closeEditCategorieModal() {
    this.editedCategorie = null; // Reset edited category when the modal is closed
    this.showEditCategorieModal = false;
  }

  editCategorie(): void {
    if (this.editedCategorie) {
      this.categorieService.updateCatById(this.editedCategorie._id, this.editedCategorie).subscribe(() => {
        this.toastr.success('Category updated successfully!', 'Success');

        this.loadCategories(); // Reload the categories after editing one
        this.closeEditCategorieModal(); // Close the modal after editing the category
      });
    }
  }

}
