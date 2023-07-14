import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationService } from '../../services/reclamation.service';
import { Reclamation } from '../../model/reclamation';

@Component({
  selector: 'app-listereclamation',
  templateUrl: './listereclamation.component.html',
  styleUrls: ['./listereclamation.component.scss']
})
export class ListereclamationComponent implements OnInit {
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any[];
  reclamationSupprimee: boolean = false;
  emailRecherche: string = '';
  reclamationsRecherchees: Reclamation[];
  statistics: any[];

  reclamation: Reclamation[];

  constructor(private reclamationService: ReclamationService, private router: Router) {}

  ngOnInit(): void {
    this.ReclamationsAll();
  }

  ReclamationsAll(): void {
    this.reclamationService.getReclamation().subscribe(
      (res: Reclamation[]) => {
        this.reclamation = res;
        this.filterReclamations(); // Filtre les réclamations après les avoir récupérées
      },
      (error: any) => {
        console.error("Une erreur s'est produite lors de la récupération des réclamations :", error);
        // Gérer l'affichage du message d'erreur dans votre interface utilisateur
      }
    );
  }

  filterReclamations(): void {
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
  }

  supprimerReclamation(id: string): void {
    this.reclamationService.supprimerReclamation(id).subscribe(
      () => {
        this.reclamationSupprimee = true; // Réclamation supprimée avec succès
        this.ReclamationsAll(); // Récupère à nouveau toutes les réclamations après la suppression
        // Effectuez les actions nécessaires après la suppression
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la suppression de la réclamation :', error);
        // Gérer l'affichage du message d'erreur dans votre interface utilisateur
      }
    );
  }

  rechercherParEmail(mail: string): void {
    this.emailRecherche = mail;
    this.filterReclamations(); // Filtre les réclamations lors de la recherche
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
