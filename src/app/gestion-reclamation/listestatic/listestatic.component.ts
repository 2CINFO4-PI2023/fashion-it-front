import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../services/reclamation.service';

@Component({
  selector: 'app-listestatic',
  templateUrl: './listestatic.component.html',
  styleUrls: ['./listestatic.component.scss']
})
export class ListestaticComponent implements OnInit {

  reclamationStats: any[];

  // Propriétés pour le graphique
  chartData: number[];
  chartLabels: string[];
  chartOptions: any = {
    responsive: true
  };

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.getReclamationStats();
  }

  getReclamationStats() {
    this.reclamationService.getReclamationStats()
      .subscribe(
        stats => {
          this.reclamationStats = stats;
          this.prepareChartData(); // Appeler la méthode pour préparer les données du graphique
        },
        error => {
          console.log(error);
        }
      );
  }

  prepareChartData() {
    this.chartData = this.reclamationStats.map(stat => stat.NombredeReclamation);
    this.chartLabels = this.reclamationStats.map(stat => stat.type.title);
  }

}
