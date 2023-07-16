import { Component, OnInit } from '@angular/core';
import { LivreursService } from '../../services/livreurs.service';
import { Livreur } from '../../model/Livreur';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-livreur',
  templateUrl: './add-livreur.component.html',
  styleUrls: ['./add-livreur.component.scss']
})
export class AddLivreurComponent {
  nouveauLivreur: Livreur = new Livreur();

  constructor(private livreursService: LivreursService) { }

  ajouterLivreur() {
    this.livreursService.addLivreur(this.nouveauLivreur).subscribe(
      (livreurAjoute) => {
        console.log('Livreur ajouté avec succès :', livreurAjoute);
        // Effectuez les actions nécessaires après l'ajout du livreur
        // Par exemple, réinitialiser le formulaire et afficher un message de succès
        this.nouveauLivreur = new Livreur();
        // livreurForm.reset() si vous souhaitez réinitialiser le formulaire
      },
      (erreur) => {
        console.error('Une erreur s\'est produite lors de l\'ajout du livreur :', erreur);
        // Gérez l'erreur d'ajout du livreur
      }
    );
  }
}
