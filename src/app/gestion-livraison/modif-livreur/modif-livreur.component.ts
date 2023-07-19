import { Livreur } from './../../model/Livreur';
import { LivreursService } from './../../services/livreurs.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-modif-livreur',
  templateUrl: './modif-livreur.component.html',
  styleUrls: ['./modif-livreur.component.scss']
})
export class ModifLivreurComponent implements OnInit {

  public breakpoint!: number; // Breakpoint observer code
  public addCusForm?: FormGroup;

  wasFormChanged = false;
  selectedOption!: any;
  produitDisplay = true;
  constructor(
    public dialogRef: MatDialogRef<ModifLivreurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private fromBuilder: FormBuilder, private commandeService: LivreursService

  ) { console.log(data)}

  public ngOnInit(): void {
 

    this.addCusForm = this.fromBuilder.group({
      Nom: ["", [Validators.required]],
      Prenom: ["", [Validators.required]],
      NUMtelephone: ["", [Validators.required]],
      adresse: ["", [Validators.required]]
      , adressEmail: ["", [Validators.required]]
      , typeDEvehicule: ["", [Validators.required]]
      , age: ["", [Validators.required]]
      , profession: ["", [Validators.required]]
      , sex: ["", [Validators.required]]
      , moyenneNote: ["", [Validators.required]]    });
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
    console.log(this.addCusForm?.valid)
    const fromValue = this.addCusForm?.value;
  let cmd =new Livreur();
    console.log(fromValue);
  //  cmd._id=this.data.id;
   
   cmd.Nom = fromValue.Nom;
   cmd.Prenom = fromValue.Prenom;
   cmd.NUMtelephone = fromValue.NUMtelephone;
   cmd.adresse = fromValue.adresse;
   cmd.adressEmail = fromValue.adressEmail;
   cmd.typeDEvehicule = fromValue.typeDEvehicule;
   cmd.age = fromValue.age;
   cmd.profession = fromValue.profession;
   cmd.sex = fromValue.sex;
   cmd.moyenneNote = fromValue.moyenneNote;
   console.log(cmd)
   console.log(this.data.idstr)
   this.modifier(this.data.idstr,cmd);
   
  this.dialogRef.close({data:"ok"});}




  openDialog(): void {
    console.log(this.wasFormChanged);
    if (this.addCusForm?.dirty) {

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
    this.addCusForm?.reset();



  }

  modifier(LivreurId: string, data: any): void {
    this.commandeService.modifiercommade(LivreurId, data).subscribe(
      (Livreur: Livreur) => {
        console.log('Livreur mise à jour avec succès:', Livreur);
        // Gérez ici la réponse de l'API après la mise à jour
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la Livreur:', error);
        // Gérez ici les erreurs
      } );}
    }

