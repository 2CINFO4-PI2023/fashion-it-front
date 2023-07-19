import { NotelivreurService } from './../services/notelivreur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistique-livreur',
  templateUrl: './statistique-livreur.component.html',
  styleUrls: ['./statistique-livreur.component.scss']
})
export class StatistiqueLivreurComponent implements OnInit {
  statistics: any; // Vous pouvez définir une interface pour typer les statistiques si nécessaire

  constructor(private NotelivreurService: NotelivreurService) { }

  ngOnInit(): void {
    this.getLivreurStatistics();
  }

  getLivreurStatistics(): void {
    this.NotelivreurService.getstatistique().subscribe(
      (statistics) => {
        console.log(statistics)
        this.statistics = statistics; // Mettre à jour les statistiques récupérées
      },
      (error) => {
        console.error('Erreur lors de la récupération des statistiques des livreurs:', error);
        // Gérez ici les erreurs
      }
    );
  }
}