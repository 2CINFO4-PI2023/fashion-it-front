import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeService } from '../../services/type.service';
import { Type } from '../../model/type';
@Component({
  selector: 'app-listetype',
  templateUrl: './listetype.component.html',
  styleUrls: ['./listetype.component.scss']
})
export class ListetypeComponent implements OnInit {
  type: Type[];
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any[];
  typeSupprimee: boolean = false;
  constructor(private typeService:TypeService , private router: Router) { }

  ngOnInit(): void {
    this.TypeAll();
    
  }
  TypeAll(): void {
    this.typeService.getType().subscribe(
      (res: Type[]) => {
        this.type = res;
        /*this.filterReclamations(); // Filtre les réclamations après les avoir récupérées*/
      },
      (error: any) => {
        console.error("Une erreur s'est produite lors de la récupération des réclamations :", error);
        // Gérer l'affichage du message d'erreur dans votre interface utilisateur
      }
    );
  }

 /* filterReclamations(): void {
    if (this.emailRecherche) {
      // Si un email de recherche est saisi, filtre les réclamations en fonction de l'email
      this.reclamationsRecherchees = this.reclamation.filter(
        (reclamation: Reclamation) =>
          reclamation.mail.toLowerCase().includes(this.emailRecherche.toLowerCase())
      );
    } else {
      // Sinon, affiche toutes les réclamations
      this.reclamationsRecherchees = this.reclamation;
    }
  }*/

  supprimerType(id: string): void {
    this.typeService.supprimerType(id).subscribe(
      () => {
        this.typeSupprimee = true; // Réclamation supprimée avec succès
        this.TypeAll(); // Récupère à nouveau toutes les réclamations après la suppression
        // Effectuez les actions nécessaires après la suppression
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la suppression de la réclamation :', error);
        // Gérer l'affichage du message d'erreur dans votre interface utilisateur
      }
    );
  }
  entriesChange(event: any) {
    this.entries = event.target.value;
  }

  onSelect({ selected }) {
    this.selected = selected;
  }

  onActivate(event: any) {
    this.activeRow = event.row;
  }

}
