import { ModifLivreurComponent } from './modif-livreur/modif-livreur.component';
import { Component, OnInit } from '@angular/core';
import { LivreursService } from '../services/livreurs.service';
import { Livreur } from '../model/Livreur';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-gestion-livraison',
  templateUrl: './gestion-livraison.component.html',
  styleUrls: ['./gestion-livraison.component.scss']
})
export class GestionLivraisonComponent implements OnInit {

  livreurs?:Livreur[];
  constructor(public dialog: MatDialog,private livreurService :LivreursService,private router :Router){

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

  openDialog(id: string, Nom: string, Prenom: string, NUMtelephone: string, adresse: string, adressEmail: string, profession: string, age: string, sex: string, typeDEvehicule: string , moyenneNote: string): void {
    const dialogRef = this.dialog.open(ModifLivreurComponent, {
      width: '60%', height: '90%',
      data: { idstr: id ,
        Nom:Nom,
        Prenom:Prenom,
        NUMtelephone:NUMtelephone,
        adresse:adresse,
        adressEmail:adressEmail,
        typeDEvehicule:typeDEvehicule,
        age:age,
        profession:profession,
        sex:sex,
        moyenneNote:moyenneNote,


      }
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res)
        this.livreursAll();
    })
  }

}
