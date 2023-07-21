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
import { LoginComponent } from './views/login/login.component';
import { UserListComponent } from './views/user-list/user-list.component';
import { RegisterComponent } from './views/register/register.component';
import { CategorieComponent } from './views/categorie/categorie.component';
import { ConfirmationComponent } from './views/confirmation/confirmation.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    RtlLayoutComponent,
    LoginComponent,
    RegisterComponent,
    AppComponent,
    UserListComponent,
    CategorieComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ComponentsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
