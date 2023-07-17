import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ReclamationService } from '../../services/reclamation.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-listestatic',
  templateUrl: './listestatic.component.html',
  styleUrls: ['./listestatic.component.scss']
})
export class ListestaticComponent implements OnInit, AfterViewInit {
  reclamationStats: any[];

  @ViewChild('chartCanvas', { static: false }) chartCanvas: ElementRef;
  chart: Chart;

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

  ngAfterViewInit(): void {
    this.createChart();
  }

  getReclamationStats() {
    this.reclamationService.getReclamationStats()
      .subscribe(
        stats => {
          this.reclamationStats = stats;
          this.prepareChartData(); // Appeler la méthode pour préparer les données du graphique
          this.updateChart(); // Mettre à jour le graphique une fois les données prêtes
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

  createChart() {
    const canvas = this.chartCanvas?.nativeElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.chartLabels,
          datasets: [{
            label: 'Nombre de réclamations',
            data: this.chartData,
            backgroundColor: [
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 206, 86, 0.6)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 2,
                font: {
                  size: 14,
                  weight: 'bold'
                }
              }
            }
          }
        }
      });
    }
  }
  
  updateChart() {
    if (this.chart) {
      this.chart.data.labels = this.chartLabels;
      this.chart.data.datasets[0].data = this.chartData;
      this.chart.update();
    }
  }
}
