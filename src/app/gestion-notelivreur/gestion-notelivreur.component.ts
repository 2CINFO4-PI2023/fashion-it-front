import { Component, OnInit } from '@angular/core';
import { Livreur } from '../model/Livreur';
import { LivreursService } from '../services/livreurs.service';

@Component({
  selector: 'app-gestion-notelivreur',
  templateUrl: './gestion-notelivreur.component.html',
  styleUrls: ['./gestion-notelivreur.component.scss']
})
export class GestionNotelivreurComponent implements OnInit {

  livreurs?:Livreur[];
  constructor(private livreurService :LivreursService){

  }
  ngOnInit(): void {
this.livreursAll();

  }
  livreursAll(): void {
    this.livreurService.getmeilleur().subscribe((res:Livreur[]) => {
      this.livreurs=res
      console.log(this.livreurs);

    })
  }
}