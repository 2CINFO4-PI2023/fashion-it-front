import { Commande } from './../model/commande';
import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { Router } from '@angular/router';
import { ModifCommandeComponent } from './modif-commande/modif-commande.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-gestion-commande',
  templateUrl: './gestion-commande.component.html',
  styleUrls: ['./gestion-commande.component.scss']
})
export class GestionCommandeComponent implements OnInit {

  commandes: Commande[] = [];

  constructor(public dialog: MatDialog, private commandeService: CommandeService, private router: Router) { }

  ngOnInit(): void {
    this.getCommands();
  }
  public getCommands(): void {
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


  openDialog(id: string, livreurId: string, produits: string, adresse: string, adressEmail: string, Prixtotal: string, longitude: string, latitude: string): void {
    const dialogRef = this.dialog.open(ModifCommandeComponent, {
      width: '60%', height: '90%',
      data: { idstr: id ,
      livreurId:livreurId,
      produits:produits,
      adresse:adresse,
      adressEmail:adressEmail,
      Prixtotal:Prixtotal,
      longitude:longitude,
      latitude:latitude
      }
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res)
        this.getCommands();
    })
  }

  openMaps(id:string):void{
    const url = 'http://localhost:9090/commande/'+id;
    window.open(url, '_blank');
  
    /*
    this.commandeService.localisationcommande(id).subscribe(res=>{
      console.log("open maps");
    })

*/
  }

}
