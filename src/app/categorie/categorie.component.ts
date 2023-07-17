import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service'

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories : any[];

  constructor(private categorieservice: CategorieService) { }

  ngOnInit(): void {
    this.getCategoriesList();
    
  }

  getCategoriesList(): void {
    this.categorieservice.getCategoriesList().subscribe(
      (data) => {
        this.categories = data ;
      }, 
      (error) => {
        console.log('Une erreur est produite lors de la récupération des des catégories:', error);
      }
    );
  }

  addCategorie(categorie: any): void {
    this.categorieservice.addCategorie(categorie).subscribe(
      (data) => {
        console.log('Nouvelle catégorie ajoutée avec succés:', data);
        this.getCategoriesList();
      },
      (error)=>{
        console.log('une erreur est produite lors de lajout de la catégorie :', error);
      }
      );
    
  }

  updateCategorie(categorieId:  string , updateCategorie: any ): void {
    this.categorieservice.updateCategorie(categorieId, updateCategorie).subscribe(
      (data)=> {
        console.log('Catégorie mise à jour avec succés :', data );
      },
      (error)=>{
        console.log('une erreur est produite lors de la mise à jour de la catégorie :',error);
      }

    );
  }

deleteCategorie(categorieId:  string): void {
  this.categorieservice.deleteCategorie(categorieId).subscribe(
    (data)=> {
      console.log('Categorie supprimer avec succés :', data);
      this.getCategoriesList();
    },
    (error)=>{
      console.log('Une erreur est produite lors de la suppression de la catégorie:', error );
    }
  );
}
  
}
