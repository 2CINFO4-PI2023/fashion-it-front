import { CommandeService } from './../../services/commande.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Commande } from 'src/app/model/commande';

@Component({
  selector: 'app-modif-commande',
  templateUrl: './modif-commande.component.html',
  styleUrls: ['./modif-commande.component.scss']
})
export class ModifCommandeComponent{
  public breakpoint!: number; // Breakpoint observer code
  public addCusForm?: FormGroup;

  wasFormChanged = false;
  selectedOption!: any;
  produitDisplay = true;
  constructor(
    public dialogRef: MatDialogRef<ModifCommandeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private fromBuilder: FormBuilder, private commandeService: CommandeService

  ) { console.log(data)}

  public ngOnInit(): void {
 

    this.addCusForm = this.fromBuilder.group({
      produit: ["", [Validators.required]],
      adresse: ["", [Validators.required]],
      adressEmail: ["", [Validators.required]],
      Prixtotal: ["", [Validators.required]]
      , latitude: ["", [Validators.required]]
      , longitude: ["", [Validators.required]]    });
    this.breakpoint = window.innerWidth <= 900 ? 1 : 2; // Breakpoint observer code
  }






  

 

  disaibledProd(): void {
    console.log("test  ==> " + this.selectedOption?.name)
    if (this.selectedOption?.name == "Group") {
      this.produitDisplay = false;
    } else {
      this.produitDisplay = true;
    }


  }

   modifierCommande(): void {
    console.log(this.addCusForm.valid)
    const fromValue = this.addCusForm.value;
  let cmd =new Commande();
    console.log(fromValue);
  //  cmd._id=this.data.id;
    cmd.livreurId=this.data.livreurId;
   cmd.produits = fromValue.produit;
   cmd.adresse = fromValue.adresse;
   cmd.adressEmail = fromValue.adressEmail;
   cmd.Prixtotal = fromValue.Prixtotal;
   cmd.latitude = fromValue.latitude;
   cmd.longitude = fromValue.longitude;
   console.log(cmd)
   console.log(this.data.idstr)
   this.modifier(this.data.idstr,cmd);
   
  this.dialogRef.close({data:"ok"});



  }


  get f() {
    return this.addCusForm.controls;
  }
  openDialog(): void {
    console.log(this.wasFormChanged);
    if (this.addCusForm.dirty) {

    } else {
      this.dialog.closeAll();
    }
  }

  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      console.log(group.controls[i].value);
      group.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
    //   this.fromScGenrique.controls
  }



  viderFroms(): void {
    this.addCusForm.reset();



  }

  modifier(commandeId: string, data: any): void {
    this.commandeService.modifiercommade(commandeId, data).subscribe(
      (commande: Commande) => {
        console.log('Commande mise à jour avec succès:', commande);
        // Gérez ici la réponse de l'API après la mise à jour
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la commande:', error);
        // Gérez ici les erreurs
      } );}
    }








