import { Notelivreur } from './../model/notelivreur';
import { NotelivreurService } from './../services/notelivreur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-notelivreurs',
  templateUrl: './add-notelivreurs.component.html',
  styleUrls: ['./add-notelivreurs.component.scss']
})
export class AddNotelivreursComponent  {

  nouveauNotelivreur: Notelivreur = new Notelivreur();

  constructor(private NotelivreurService: NotelivreurService) { }

  ajouternotelivreurs() {
    this.NotelivreurService.addnotelivreur(this.nouveauNotelivreur).subscribe(
      (Notelivreurajoute) => {
        console.log('commande ajouté avec succès :', Notelivreurajoute);
        // Effectuez les actions nécessaires après l'ajout du livreur
        // Par exemple, réinitialiser le formulaire et afficher un message de succès
        this.nouveauNotelivreur = new Notelivreur();
        // livreurForm.reset() si vous souhaitez réinitialiser le formulaire
      },
      (erreur) => {
        console.error('Une erreur s\'est produite lors de l\'ajout du livreur :', erreur);
        // Gérez l'erreur d'ajout du livreur
      }
    );
  }
}
