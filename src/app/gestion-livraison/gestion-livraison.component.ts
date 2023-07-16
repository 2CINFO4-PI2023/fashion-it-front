import { Component, OnInit } from '@angular/core';
import { LivreursService } from '../services/livreurs.service';
import { Livreur } from '../model/Livreur';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gestion-livraison',
  templateUrl: './gestion-livraison.component.html',
  styleUrls: ['./gestion-livraison.component.scss']
})
export class GestionLivraisonComponent implements OnInit {

  livreurs?:Livreur[];
  constructor(private livreurService :LivreursService,private router :Router){

  }
  ngOnInit(): void {
this.livreursAll();

  }
  livreursAll(): void {
    this.livreurService.getLivreurs().subscribe((res:Livreur[]) => {
      this.livreurs=res
      console.log(this.livreurs);

    })
  }

  ajouter():void{
    this.router.navigate(['/ajouter']);

  }
  deleteLivreur(_id: string) {
    this.livreurService.deleteLivreur(_id).subscribe(
      () => {
        // La suppression a réussi, effectuez les actions supplémentaires nécessaires (recharger la liste, afficher un message, etc.)
      },
      error => {
        // Une erreur s'est produite lors de la suppression, gérez l'erreur en conséquence (afficher un message d'erreur, annuler les modifications, etc.)
      }
    );
  }



}
