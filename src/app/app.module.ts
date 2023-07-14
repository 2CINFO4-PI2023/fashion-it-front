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
import { RtlLayoutComponent } from "./layouts/rtl-layout/rtl-layout.component";
import { ListereclamationComponent } from './gestion-reclamation/listereclamation/listereclamation.component';
import { ListetypeComponent } from './gestion-reclamation/listetype/listetype.component';
import { AddtypeComponent } from './gestion-reclamation/addtype/addtype.component';
import { UpdatetypeComponent } from './gestion-reclamation/updatetype/updatetype.component';
import { ListestaticComponent } from './gestion-reclamation/listestatic/listestatic.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    RtlLayoutComponent,
    ListereclamationComponent,
    ListetypeComponent,
    AddtypeComponent,
    UpdatetypeComponent,
    ListestaticComponent
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
