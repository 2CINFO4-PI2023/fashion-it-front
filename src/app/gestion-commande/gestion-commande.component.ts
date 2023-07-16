import { Commande } from './../model/commande';
import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gestion-commande',
  templateUrl: './gestion-commande.component.html',
  styleUrls: ['./gestion-commande.component.scss']
})
export class GestionCommandeComponent implements OnInit {

  commandes: Commande[] = [];

  constructor(private commandeService: CommandeService, private router :Router) { }

  ngOnInit(): void {
    this.commandeService.getcommande().subscribe(commandes => {
      this.commandes = commandes;
    });
  }
  deletecommande(_id: string) {
    this.commandeService.deletecommande(_id).subscribe(
      () => {
        // La suppression a réussi, effectuez les actions supplémentaires nécessaires (recharger la liste, afficher un message, etc.)
      },
      error => {
        // Une erreur s'est produite lors de la suppression, gérez l'erreur en conséquence (afficher un message d'erreur, annuler les modifications, etc.)
      }
    );
  }
  localisationcommande(_id: string) {
    this.commandeService.localisationcommande(_id).subscribe(
      () => {console.log("geegergerge")
      
      },
      error => {
      
      }
    );
  }
}