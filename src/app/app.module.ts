import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { GestionLivraisonComponent } from './gestion-livraison/gestion-livraison.component';
import { AddLivreurComponent } from './gestion-livraison/add-livreur/add-livreur.component';
import { GestionCommandeComponent } from './gestion-commande/gestion-commande.component';
import { GestionNotelivreurComponent } from './gestion-notelivreur/gestion-notelivreur.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { ModifCommandeComponent } from './gestion-commande/modif-commande/modif-commande.component';
import {CdkTableModule} from '@angular/cdk/table';

import {MatCheckboxModule} from '@angular/material/checkbox';
    import{ MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';
import { AddNotelivreursComponent } from './add-notelivreurs/add-notelivreurs.component';
import { StatistiqueLivreurComponent } from './statistique-livreur/statistique-livreur.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModifLivreurComponent } from "./gestion-livraison/modif-livreur/modif-livreur.component";


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [			
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    GestionLivraisonComponent,
    AddLivreurComponent,
    GestionCommandeComponent,
    GestionNotelivreurComponent,
    AddCommandeComponent,
    ModifCommandeComponent,
      GestionNotelivreurComponent,
      AddNotelivreursComponent,
      StatistiqueLivreurComponent,ModifLivreurComponent
   ],
  imports: [
    CommonModule,ReactiveFormsModule,MatToolbarModule,
    FormsModule,BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ComponentsModule, CdkTableModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
