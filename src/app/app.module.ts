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

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    GestionLivraisonComponent,
    AddLivreurComponent,
    GestionCommandeComponent,
    GestionNotelivreurComponent,
    AddCommandeComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
