import { Component, OnInit } from '@angular/core';
import { Type } from '../../model/type';
import { TypeService } from '../../services/type.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addtype',
  templateUrl: './addtype.component.html',
  styleUrls: ['./addtype.component.scss']
})
export class AddtypeComponent implements OnInit {

  nouveauType: Type = new Type();
  message: string = '';

  constructor(private typeService: TypeService,private router: Router) { }

  ngOnInit(): void {
  }

  ajouterType(): void {
    this.typeService.ajouterType(this.nouveauType).subscribe(
      (response: Type) => {
        this.nouveauType = new Type();
        this.message = 'Type ajouté avec succès.';
        // Redirection vers /type après 1 seconde
        setTimeout(() => {
          this.router.navigate(['/type']);
        }, 1000);
      },
      (error: any) => {
        this.message = 'Erreur lors de l\'ajout du type.';
      }
    );
  }
}