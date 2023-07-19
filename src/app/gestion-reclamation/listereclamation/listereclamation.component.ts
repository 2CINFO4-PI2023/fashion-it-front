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
  messageSucces: string = '';
  reclamation: Reclamation[];

  constructor(private reclamationService: ReclamationService, private router: Router) {}

  ngOnInit(): void {
    this.ReclamationsAll();
  }

  ReclamationsAll(): void {
    this.reclamationService.getReclamation().subscribe(
      (res: Reclamation[]) => {
        this.reclamation = res;
        this.reclamation.sort((a, b) => new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime());
        this.filterReclamations();
      },
      (error: any) => {
        console.error("Une erreur s'est produite lors de la récupération des réclamations :", error);
        // Gérer l'affichage du message d'erreur dans votre interface utilisateur
      }
    );
  }

  filterReclamations(): void {
    if (this.emailRecherche) {
      this.reclamationsRecherchees = this.reclamation.filter(
        (reclamation: Reclamation) =>
          reclamation.mail.toLowerCase().includes(this.emailRecherche.toLowerCase())
      );
    } else {
      this.reclamationsRecherchees = this.reclamation;
    }
  }

  supprimerReclamation(id: string): void {
    this.reclamationService.supprimerReclamation(id).subscribe(
      () => {
        this.reclamationSupprimee = true;
        this.ReclamationsAll();
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la suppression de la réclamation :', error);
      }
    );
  }

  mettreAJourEtat(id: string): void {
    const etatMaj = 1;

    this.reclamationService.mettreAJourEtatReclamation(id, etatMaj).subscribe(
      () => {
        this.ReclamationsAll();
        this.messageSucces = 'L\'état de la réclamation a été mis à jour avec succès.';
      },
      (error) => {
        console.error("Une erreur s'est produite lors de la mise à jour de l'état de la réclamation :", error);
      }
    );
  }

  rechercherParEmail(mail: string): void {
    this.emailRecherche = mail;
    this.filterReclamations();
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
