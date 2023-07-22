import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-dashboard',
  templateUrl: './small-dashboard.component.html',
  styleUrls: ['./small-dashboard.component.scss']
})
export class SmallDashboardComponent implements OnInit {
  selectedComponent = '';

  constructor() { }

  ngOnInit(): void {
  }

  showComponent(componentName: string): void {
    this.selectedComponent = componentName;
  }

}
