import { Component, OnInit } from '@angular/core';
import { TypeService } from '../../services/type.service';
import { Type } from '../../model/type';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatetype',
  templateUrl: './updatetype.component.html',
  styleUrls: ['./updatetype.component.scss']
})
export class UpdatetypeComponent implements OnInit {

  type: Type = new Type();
  _id: string;
  updateMessage: string = '';

  constructor(private typeService: TypeService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params.id;
  }

  updateType(_id: string, updatedType: any): void {
    this.typeService.updateType(_id, updatedType).subscribe(
      () => {
        this.updateMessage = 'Type mis à jour avec succès';
        // Effectuez les actions nécessaires après la mise à jour
        setTimeout(() => {
          this.router.navigate(['/Type']);
        }, 1000);
      },
      (error) => {
        console.error(error);
        this.updateMessage = 'Erreur lors de la mise à jour du type';
        // Gérer l'affichage du message d'erreur dans votre interface utilisateur
      }
    );
  }
}
