import { Component, OnInit } from '@angular/core';
import { Commande } from './../model/commande';

import { CommandeService } from './../services/commande.service';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.scss']
})
export class AddCommandeComponent  {
  nouveaucommande: Commande = new Commande();

  constructor(private CommandeService: CommandeService) { }

  ajoutercommande() {
    this.CommandeService.addcommande(this.nouveaucommande).subscribe(
      (CommandeAjoute) => {
        console.log('commande ajouté avec succès :', CommandeAjoute);
        // Effectuez les actions nécessaires après l'ajout du livreur
        // Par exemple, réinitialiser le formulaire et afficher un message de succès
        this.nouveaucommande = new Commande();
        // livreurForm.reset() si vous souhaitez réinitialiser le formulaire
      },
      (erreur) => {
        console.error('Une erreur s\'est produite lors de l\'ajout du livreur :', erreur);
        // Gérez l'erreur d'ajout du livreur
      }
    );
  }
}
